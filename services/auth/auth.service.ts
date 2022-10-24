import {Jsonable} from "@shared/models/tools/tools";
import {Transform} from "class-transformer";
import {vueTools} from "@shared/services/vueToolsProvider.service";
import {reactive} from "vue";
import {routeHelper} from "@shared/helpers/route.helper";
import API from "@/http/API";


import {LogForm} from "@models/logReg";
import {ApiResponse} from "@shared/http/abstract/serverApi";
import {errorService} from "@shared/services/error.service";
import {BehaviorSubject} from "rxjs";

export class AuthToken extends Jsonable<AuthToken>() {
	private token: string;

	@Transform(({value}) => new Date(value * 1000), {toClassOnly: true})
	private expiresAt: Date;

	get Value() {
		if (!this.token) return '';
		if (this.expiresAt > new Date()) return this.token
		return '';
	}

	getHeader() {
		const val = this.Value;
		return val ? 'Bearer ' + val : '';
	}
}

class AuthService {
	private tokenStoreKey = 'authToken';

	currentToken: BehaviorSubject<AuthToken | null> = new BehaviorSubject<AuthToken | null>(null);

	get Token() {
		return this.currentToken.getValue();
	}

	get isAuth(): boolean {
		return !!this.Token?.Value;
	}

	get isToken(): boolean {
		return !!this.Token;
	}

	constructor() {
		this.setTokenFromLocalStorage();
		if (!this.isAuth && this.isToken) {
			errorService.sessionExpiredError();
			this.logOut();
		}
	}

	private setTokenFromLocalStorage() {
		if (!process.client) return;
		const data: object = JSON.parse(localStorage.getItem(this.tokenStoreKey) as string);
		if (data) this.currentToken.next(AuthToken.fromJson(data));
	}

	logInCredentials(form: LogForm) {
		return API.Account.Sign.In.credentials(form).then((res: ApiResponse) => {
			this.setToken(res.data);
		});
	}

	logInToken(token: string) {
		return API.Account.Sign.In.token(token).then((res: ApiResponse) => {
			this.setToken(res.data);
		});
	}

	logOut(is401: boolean = false) {
		if (vueTools.router)
			vueTools.router.push({name: routeHelper.names['logIn']}).catch(console.log);
		if (this.isAuth && !is401) API.Account.Sign.out().catch(console.log);
		this.clearToken();
	}

	private clearToken() {
		localStorage.removeItem(this.tokenStoreKey);
		this.currentToken.next(null);
	}

	private setToken(data: object) {
		this.currentToken.next(AuthToken.fromJson(data))
		localStorage.setItem(this.tokenStoreKey, JSON.stringify(data));
	}
}

export const authService = reactive(new AuthService());
