// это класс Header.selectors — свойство экземпляра класса, которое содержит объект.

class Header {
  // свойство(обьект) selectors нужен чтобы не обращаться
  // не к строкам напрямую в к свойствам обьекта
  selectors = {
    // селектор по атрибуту
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    burgerButton: "[data-js-header-burger-button]",
  };
  // классы состояний,объект с названиями классов
  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  //   метод будет автоматически добавлять код при инциализации класса один
  constructor() {
    // ссылка на корневой элемент header
    // ссылаемся на свойство root которое хранится выше
    this.rootElement = document.querySelector(this.selectors.root);
    // ссылаемся на элемент this.rootElement найденный выше
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay
    );
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );

    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    // вызваем метод classList.toogle для переключения
    // Метод .toggle() делает то же самое что if else — автоматически переключает класс:
    // •	если класса нет — добавит;•	если есть — уберёт.
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };
  // привязка событий к этим элементам
  bindEvents() {
    this.burgerButtonElement.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
  }
}

export default Header;
