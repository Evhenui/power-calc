<template>
  <section class="characteristic">
    <div class="characteristic__header">
      <h1 class="characteristic__title">Характеристики</h1>
    </div>
    <section class="characteristic__wrapper">
      <nav class="characteristic__category-items">
        <div
          ref="menuCategory"
          v-for="item in slideItems[0].specifications"
          :key="item.id"
          class="characteristic__category-item"
        >
          <p class="characteristic__item-name">{{ item.name.ru }}</p>
        </div>
      </nav>

      <section class="characteristic__slider" ref="sliderFooter">
        <div class="characteristic__slider-wrapepr">
          <section
            v-for="slide in slideItems"
            :key="slide.id"
            class="characteristic__slide"
          >
                 <template v-for="el in slide.specifications" >
               <div :key="el.id" class="characteristic__slide-menu-name" v-if="mobileSlide">
                <p class="characteristic__category-menu-name">
                  {{ el.name.ru }}
                </p>
              </div>
              <div :key="el.option.id" ref="slideCategory" class="characteristic__slide-category">
                <p class="characteristic__category-title">
                  {{ el.option.value.ru }}
                </p>
              </div>
            </template> 
          </section>
       <!--    <div v-for="(item, index) in slideItems" :key="index">
            <section class="title">
              <p>{{ item.name.ru }}</p>
            </section>
            <section class="details">
              <div>{{ item.specifications }}</div>
            </section>
          </div> -->
        </div>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CharacteristicsMainComponent extends Vue {
  @Prop({required: false}) sending: number;

  $refs: {
    menuCategory: HTMLElement[];
    slideCategory: HTMLElement[];
    sliderFooter: HTMLElement;
  };

  mobileSlide: boolean = false;
  slideItems = [
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 1,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 2,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 2,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 1,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 2,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 2,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 1,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 2,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 2,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 1,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 2,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
    {
      id: "2d3a2a3b-c5dc-4a92-918d-d93d223f22d4",
      code: "0016727",
      barcode: "6900167270015",
      slug: {
        ru: "komplekt-videonablyudeniya-gv-ip-k-w58-04-3mp",
        uk: "komplekt-videosposterezhennya-gv-ip-k-w58-04-3mp",
      },
      name: {
        ru: "Комплект видеонаблюдения GV-IP-K-W58/04 3MP",
        uk: "Комплект відеоспостереження GV-IP-K-W58/04 3MP",
      },
      description: {
        ru: "<div> <p><strong>Комплект видеонаблюдения GV-IP-K-W58/04 3MP</strong></p> <p>Wi-Fi комплект видеонаблюдения GreenVision предназначен для наружной установки. Универсальный режим подключения не требует прокладки выделенной линии сетевых кабелей.</p> <p>Комплект видеонаблюдения Wi-Fi подходит для самостоятельной установки и не требует каких-то специальных знаний или навыков при настройке и монтаже. Для подключения достаточно включить блок питания видеокамер в стандартную розетку 220V, и Вы сможете увидеть видео с камер на мониторе (качество изображения Full HD+) . Видеорегистратор оборудован портами для подключения к телевизору, компьютерному или специализированному монитору.</p> <p>Комплект беспроводного Wi-Fi видеонаблюдения &ndash; рациональное решение для установки в местах, где сложно проложить кабельную сеть. Камеры видеонаблюдения настроены таким образом, чтобы не мешать работе смежных Wi-Fi сетей.</p> <p><strong>5 причин купить&nbsp;Wi-Fi&nbsp;комплект видеонаблюдения в Украине:&nbsp;</strong></p> <ol> <li><strong>Широкие интеллектуальные возможности камер видеонаблюдения</strong>: распознавание лиц, съемка и оповещение по движению и др.</li> <li><strong>Возможность подключить дополнительные камеры к видеорегистратору</strong>: 8 камер с разрешением 3MP или 4 камеры по 5MP.</li> <li><strong>Эффективная работа при любых погодных условиях</strong>. Wi-Fi комплект видеонаблюдения имеет надежную защиту от влаги и других вредных воздействий окружающей среды. Отличительная особенность представленной модели &ndash; повышенная стойкость к экстремальным температурам.</li> <li><strong>Высокое качество и скорость передачи и архивации изображения</strong>. Поддерживает запись на SD карту или жесткий диск со своим источником питания.</li> <li><strong>Экономия места на жестком диске при архивации.</strong> Функция &laquo;смарт сейв&raquo; &ndash; SD карты на 128 Gb хватает на 2 недели записи для 2-х камер из комплекта.</li> </ol> <p><strong>Описание&nbsp;WiFi комплекта:</strong></p> <p><strong>Комплектация:</strong> Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.;</p> <p><strong>Видеорегистратор:</strong> тип регистратора - NVR. Рассчитан на подключение 8 IP&nbsp;видеокамер;</p> <p><strong>Камера:</strong></p> <ul> <li>применение - наружное,</li> <li>тип - IP Wi-Fi,</li> <li>разрешение - [Кол-во мегапикселей, MP]MP,</li> <li>тип обьектива -&nbsp;фиксированный&nbsp;(угол обзора 85 градусов),</li> <li>имеет встроенную инфракрасную подсветку на 15 метров.</li> </ul> </div>",
        uk: '<p style="text-align: center;" data-mce-style="text-align: center;"><strong>Комплект відеоспостереження GreenVision GV-IP-K-W58/04 3MP</strong></p><p>Wi-Fi комплект відеоспостереження GreenVision призначено для зовнішнього встановлення. Універсальний режим підключення не потребує прокладання виділеної лінії мережевих кабелів.</p><p>Комплект відеоспостереження Wi-Fi підходить для самостійного встановлення та не потребує якихось спеціальних знань або навичок при налаштуванні та монтажі. Для підключення достатньо включити блок живлення відеокамер у стандартну розетку 220V, і Ви зможете побачити відео з камер на моніторі (якість зображення Full HD+). Відеореєстратор має порти для підключення до телевізора, комп"ютерного або спеціалізованого монітора.</p><p>Комплект бездротового Wi-Fi відеоспостереження – раціональне рішення для встановлення у місцях, де складно прокласти кабельну мережу. Камери відеоспостереження налаштовані таким чином, щоб не заважати роботі суміжних Wi-Fi мереж.</p><p align="center"><strong>5 причин купити Wi-Fi комплект відеоспостереження в Україні:</strong></p><ol><li><strong>Широкі інтелектуальні можливості камер відеоспостереження</strong>: розпізнавання осіб, зйомка та оповіщення з руху та ін.</li><li><strong>Можливість підключити додаткові камери до відеореєстратора</strong>: 8 камер з роздільною здатністю 3MP або 4 камери 5MP.</li><li><strong>Ефективна робота за будь-яких погодних умов</strong>. Wi-Fi комплект відеоспостереження має надійний захист від вологи та інших шкідливих впливів довкілля. Відмінна риса представленої моделі – підвищена стійкість до екстремальних температур.</li><li><strong>Висока якість та швидкість передачі та архівації зображення</strong>.&nbsp;Роздільна здатність зображення 2304х1296. SD карти на 128 Gb вистачає на 2 тижні запису для 2-х камер із комплекту (тиждень для комплекту на 4 камери).</li><li><strong>Додаткові можливості зберігання архівів відеозаписів.</strong> Для збільшення термінів та обсягів зберігання архіви відео в ручному режимі можна переносити на зовнішній жорсткий диск.</li></ol><p style="text-align: center;" data-mce-style="text-align: center;"><strong>Опис WiFi комплекту:</strong></p><p><strong>Комплектація:</strong> Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.;</p><p><strong>Відеореєстратор:</strong> тип реєстратора – NVR. Розрахований на підключення 8 IP&nbsp;відеокамер;</p><p><strong>Камера:</strong></p><ul><li>застосування - зовнішнє,</li><li>тип - IP Wi-Fi,</li><li>роздільна здатність - [Кол-во мегапикселей, MP]MP,</li><li>тип об"єктиву -&nbsp;фіксований&nbsp;(кут огляду 85 градусів),</li><li>має вбудоване інфрачервоне підсвічування на 15 метрів.</li></ul>',
      },
      status: "inStock",
      manufacturer: {
        id: "5ec469e1-59e6-4eb7-87fc-ea51dd5a5830",
        name: "GreenVision",
        slug: "greenvision",
      },
      specifications: [
        {
          id: 2,
          name: {
            ru: "Вес, кг",
            uk: "Вага, кг",
          },
          option: {
            id: 474,
            value: {
              ru: 2.1,
              uk: 2.1,
            },
          },
        },
        {
          id: 2,
          name: {
            ru: "Объем, м.куб",
            uk: "Об'єм, м.куб",
          },
          option: {
            id: 2943,
            value: {
              ru: 0.007553,
              uk: 0.007553,
            },
          },
        },
        {
          id: 3,
          name: {
            ru: "Тип",
            uk: "Тип",
          },
          option: {
            id: 542,
            value: {
              ru: "комплект видеонаблюдения",
              uk: "комплект відеоспостереження",
            },
          },
        },
        {
          id: 82,
          name: {
            ru: "Применение",
            uk: "Застосування",
          },
          option: {
            id: 110,
            value: {
              ru: "наружное",
              uk: "зовнішнє",
            },
          },
        },
        {
          id: 220,
          name: {
            ru: "Количество камер, шт",
            uk: "Кількість камер, шт",
          },
          option: {
            id: 464,
            value: {
              ru: "4",
              uk: "4",
            },
          },
        },
        {
          id: 221,
          name: {
            ru: "Тип камер",
            uk: "Тип камер",
          },
          option: {
            id: 2937,
            value: {
              ru: "Wi-Fi, IP",
              uk: "Wi-Fi, IP",
            },
          },
        },
        {
          id: 81,
          name: {
            ru: "Тип корпуса",
            uk: "Тип корпусу",
          },
          option: {
            id: 197,
            value: {
              ru: "цилиндрический",
              uk: "циліндричний",
            },
          },
        },
        {
          id: 259,
          name: {
            ru: "Степень защиты камер",
            uk: "Ступінь захисту камер",
          },
          option: {
            id: 123,
            value: {
              ru: "IP66",
              uk: "IP66",
            },
          },
        },
        {
          id: 222,
          name: {
            ru: "Тип регистратора",
            uk: "Тип реєстратора",
          },
          option: {
            id: 75,
            value: {
              ru: "NVR",
              uk: "NVR",
            },
          },
        },
        {
          id: 66,
          name: {
            ru: "Процессор",
            uk: "Процесор",
          },
          option: {
            id: 2938,
            value: {
              ru: "HI3536D V100",
              uk: "HI3536D V100",
            },
          },
        },
        {
          id: 62,
          name: {
            ru: "Кол-во подключаемых камер, шт",
            uk: "Кількість під'єднуваних камер, шт",
          },
          option: {
            id: 82,
            value: {
              ru: "8",
              uk: "8",
            },
          },
        },
        {
          id: 61,
          name: {
            ru: "Тип поддерживаемых камер",
            uk: "Тип підтримуваних камер",
          },
          option: {
            id: 76,
            value: {
              ru: "IP",
              uk: "IP",
            },
          },
        },
        {
          id: 561,
          name: {
            ru: "SD карта",
            uk: "SD карта",
          },
          option: {
            id: 2657,
            value: {
              ru: "запись на SD карту",
              uk: "запис на карту SD",
            },
          },
        },
        {
          id: 564,
          name: {
            ru: "Кол-во поддерживаемых SD карт",
            uk: "Кількість підтримуваних SD карт",
          },
          option: {
            id: 100,
            value: {
              ru: "1",
              uk: "1",
            },
          },
        },
        {
          id: 223,
          name: {
            ru: "Ethernet LAN, Mbit",
            uk: "Ethernet LAN, Mbit",
          },
          option: {
            id: 440,
            value: {
              ru: "10/100",
              uk: "10/100",
            },
          },
        },
        {
          id: 72,
          name: {
            ru: "Сжатие видео",
            uk: "Стиснення відео",
          },
          option: {
            id: 2939,
            value: {
              ru: "H.264, H.264+, H.265, H.265+ AI",
              uk: "H.264, H.264+, H.265, H.265+ AI",
            },
          },
        },
        {
          id: 65,
          name: {
            ru: "Видеовыход",
            uk: "Відеовихід",
          },
          option: {
            id: 80,
            value: {
              ru: "VGA, HDMI (MAX 1080P)",
              uk: "VGA, HDMI (MAX 1080P)",
            },
          },
        },
        {
          id: 63,
          name: {
            ru: "Разрешение",
            uk: "Роздільна здатність",
          },
          option: {
            id: 221,
            value: {
              ru: "2560x1440",
              uk: "2560x1440",
            },
          },
        },
        {
          id: 224,
          name: {
            ru: "Поддерживаемые регистратором, MP",
            uk: "Підтримувані реєстратором, MP",
          },
          option: {
            id: 661,
            value: {
              ru: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
              uk: "1, 1.3, 1.4, 2, 2.1, 2.4, 3, 4, 5",
            },
          },
        },
        {
          id: 69,
          name: {
            ru: "Управление поворотными камерами",
            uk: "Управління поворотними камерами",
          },
          option: {
            id: 30,
            value: {
              ru: "есть",
              uk: "є",
            },
          },
        },
        {
          id: 70,
          name: {
            ru: "Кол-во USB-портов",
            uk: "Кількість USB-портів",
          },
          option: {
            id: 29,
            value: {
              ru: "2",
              uk: "2",
            },
          },
        },
        {
          id: 71,
          name: {
            ru: "Операционная система",
            uk: "Операційна система",
          },
          option: {
            id: 83,
            value: {
              ru: "Linux",
              uk: "Linux",
            },
          },
        },
        {
          id: 78,
          name: {
            ru: "Питание, V/mA",
            uk: "Живлення, V/mA",
          },
          option: {
            id: 2940,
            value: {
              ru: "5, 2000",
              uk: "5, 2000",
            },
          },
        },
        {
          id: 83,
          name: {
            ru: "Тип объектива",
            uk: "Тип об'єктива",
          },
          option: {
            id: 111,
            value: {
              ru: "фиксированный",
              uk: "фіксований",
            },
          },
        },
        {
          id: 84,
          name: {
            ru: "Подсветка, м",
            uk: "Підсвічування, м",
          },
          option: {
            id: 394,
            value: {
              ru: "15",
              uk: "15",
            },
          },
        },
        {
          id: 85,
          name: {
            ru: "Разрешение изображения",
            uk: "Роздільна здатність зображення",
          },
          option: {
            id: 2692,
            value: {
              ru: "2304х1296",
              uk: "2304х1296",
            },
          },
        },
        {
          id: 226,
          name: {
            ru: "Количество мегапикселей",
            uk: "Кількість мегапікселів",
          },
          option: {
            id: 2701,
            value: {
              ru: "3.0",
              uk: "3.0",
            },
          },
        },
        {
          id: 88,
          name: {
            ru: "Угол обзора",
            uk: "Кут огляду",
          },
          option: {
            id: 38,
            value: {
              ru: "85",
              uk: "85",
            },
          },
        },
        {
          id: 89,
          name: {
            ru: "Фокусное расстояние, мм",
            uk: "Фокусна відстань, мм",
          },
          option: {
            id: 2941,
            value: {
              ru: "2.7",
              uk: "2.7",
            },
          },
        },
        {
          id: 158,
          name: {
            ru: "Комплектация",
            uk: "Комплектація",
          },
          option: {
            id: 2944,
            value: {
              ru: "Видеорегистратор - 1 шт; Камера - 4 шт; Блок питания - 5 шт; Мышь - 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антены - 5 шт.",
              uk: "Відеореєстратор - 1 шт; Камера - 4 шт; Блок живлення – 5 шт; Миша – 1 шт; Патчкорд RG-45 - 1шт; Wi-Fi антени – 5 шт.",
            },
          },
        },
        {
          id: 33,
          name: {
            ru: "Длина, мм",
            uk: "Довжина, мм",
          },
          option: {
            id: 2496,
            value: {
              ru: "265",
              uk: "265",
            },
          },
        },
        {
          id: 34,
          name: {
            ru: "Ширина, мм",
            uk: "Ширина, мм",
          },
          option: {
            id: 557,
            value: {
              ru: "190",
              uk: "190",
            },
          },
        },
        {
          id: 35,
          name: {
            ru: "Высота, мм",
            uk: "Висота, мм",
          },
          option: {
            id: 37,
            value: {
              ru: "150",
              uk: "150",
            },
          },
        },
        {
          id: 36,
          name: {
            ru: "Гарантия, мес",
            uk: "Гарантія, міс",
          },
          option: {
            id: 27,
            value: {
              ru: "12",
              uk: "12",
            },
          },
        },
        {
          id: 202,
          name: {
            ru: "Серия",
            uk: "Серія",
          },
          option: {
            id: 4468,
            value: {
              ru: "Lite",
              uk: "Lite",
            },
          },
        },
      ],
      categories: [
        {
          id: "496d7145-1ee5-456b-a2c0-8cae2cc00113",
          name: {
            ru: "Комплекты видеонаблюдения",
            uk: "Комплекти відеоспостереження",
          },
          slug: {
            ru: "komplekty-videonablyudeniya",
            uk: "komplekti-videosposterezhennya",
          },
          productsCount: 18,
          children: [],
        },
      ],
      images: [
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/c/4f/ef5b6821f45c9074e4d1ed4e6ef9b.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/6/69/f856127258dd4ed936a43bf850768.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/d/ca/8b719f36045ee6b74db0ecaaeedf8.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/7/e7/30ac0f10efcc061f699db62c20645.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/49/2a12507cf54209c1509f551f85dda.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/0/4c/3a7051077170cdc1bd33d69b9776a.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/1/25/acb3d4db5f4730c56b40887a6e6fc.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/4/d1/00c5380b7e26c47c134b9dfe80eb7.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/7/c4/2ed79aa1eeaf37eeb70963b00b2f9.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/8/7a/774ceb49c2da33005ca76b53cac5b.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/9/ac/f709f14d8459788e93cd836a06714.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ae/4520fe886d06e8e3f9004f74ffa03.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/f/34/e22fcc465d8b319c31e4a581354e5.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/9/5f/ef41b8162a0f32a901cfa3c3a45cb.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/2/90/b698bb807bd3ee53a19a5da358e47.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/c/ad/293f066a86989397397d3311b3e43.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/a/d7/8da3488c129ea294cde4131d69e99.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/a/fc/e389b3e47fc0c3283d9cb88709eae.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/8/3f/8051526161b38035c0969399c46c3.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/2/ff/9aa92314e2c821c55e6c53d50b9c4.jpg",
              type: "tile",
            },
          ],
        },
        {
          locales: ["ru", "uk"],
          url: "https://api.b2b.logicpower.ua/static/attachments/0/d2/b661af2e497661c9fd26e0dd4058f.jpg",
          thumbnails: [
            {
              url: "https://api.b2b.logicpower.ua/static/attachments/d/ea/c4cc72d2d1293e8a5cf1ac46786a0.jpg",
              type: "tile",
            },
          ],
        },
      ],
      attachments: [
        {
          group: "Приложения",
          files: [
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (Android)",
                uk: "XМЕye (Android)",
              },
              url: "https://play.google.com/store/apps/details?id=com.mobile.myeye&hl=ru",
              meta: {
                type: "text/html; charset=utf-8",
                size: 1017731,
              },
            },
            {
              locales: ["ru", "uk"],
              name: {
                ru: "XМЕye (iOS)",
                uk: "XМЕye (iOS)",
              },
              url: "https://apps.apple.com/ru/app/xmeye/id884006786",
              meta: {
                type: "text/html; charset=utf-8",
                size: 404894,
              },
            },
          ],
        },
      ],
      orderBags: [
        {
          type: "order",
          currency: "USD",
        },
        {
          type: "preOrder",
          currency: "USD",
        },
      ],
      prices: [
        {
          type: "personal",
          money: {
            amount: 165.2,
            currency: "USD",
          },
        },
        {
          type: "recommendedRetail",
          money: {
            amount: 9714,
            currency: "UAH",
          },
        },
      ],
    },
  ];
  someArr: Array<Object> = [];
  

    resizeElements() {
   const slideCategory = this.$refs.slideCategory;
   const menuCategory = this.$refs.menuCategory;

   slideCategory.forEach((element, index) => {

   /*    if(element.clientHeight > menuCategory[index].clientHeight) {
         menuCategory[index].style.setProperty('--height-size', element.clientHeight + 'px')
      } else if (element.clientHeight < menuCategory[index].clientHeight) {
         element.style.setProperty('--height', menuCategory[index].clientHeight + 'px')
      } */
   });
  }

  

   mounted() {
      this.resizeElements();
      console.log(this.$refs.sliderFooter.scrollLeft = this.sending)
   }; 
    some() {
      this.someArr = this.slideItems.map((element, i) => {
        return Object.assign({}, element.specifications)
      })
    }
}
</script>
 
<style lang="scss" scoped>
.characteristic {
  &__header {
    background-color: #393d38;

    padding: 8px 16px;

    @media (max-width: 860px) {
      display: none;
    }
  }

  &__title {
    @include fontUnify(16, 22, 600);
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  &__wrapper {
    @include flex-container(row, left);
  }

  &__category-items {
    max-width: 274px;
    width: 100%;

    border-right: 1px solid #d1d1d1;

    @media (max-width: 860px) {
      display: none;
    }
  }

  &__category-item,
  &__slide-category {
    background-color: white;

    padding: 8px 16px;
  }

  &__category-item {
    --height-size: auto;
    height: var(--height-size);
    &:nth-child(2n) {
      background-color: #e9e9e9;
    }
  }

  &__item-name,
  &__category-title {
    @include fontUnify(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }

  &__slider {
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__slider-wrapepr {
    @include flex-container(row, left);
  }

  &__slide {
    max-width: 243px;
    width: 100%;

    border-right: 1px solid #d1d1d1;
  }

  &__slide-menu-name {
  }

  &__category-menu-name {
  }

  &__slide-category {
    --height: auto;
    height: var(--height);
    &:nth-child(2n) {
      background-color: #e9e9e9;
    }
  }

  &__category-title {
  }
}
</style>
 