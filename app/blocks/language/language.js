// https://github.com/jshjohnson/Choices
import Choices from 'choices.js';

export default function languageSelect() {
  /* eslint-disable no-unused-vars */
  /* eslint-disable object-shorthand */
  const choices = new Choices('.js-language', {
    choices: [
      { value: 'EN', label: 'EN', selected: 'true', customProperties: { img: 'assets/images/usa.svg' } },
      { value: 'FR', label: 'FR', customProperties: { img: 'assets/images/fr.svg' } },
      { value: 'DE', label: 'DE', customProperties: { img: 'assets/images/de.svg' } },
      { value: 'RU', label: 'RU', customProperties: { img: 'assets/images/ru.svg' } },
    ],
    searchEnabled: false,
    itemSelectText: '',
    callbackOnCreateTemplates: function (template) {
      const classNames = this.config.classNames;
      const itemSelectText = this.config.itemSelectText;
      return {
        item(data) {
          return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} ${data.disabled ? 'aria-disabled="true"' : ''}>
              <img src="${data.customProperties.img}" alt="${data.label}" class="choices__image">
              <div class="choices__toggle"><svg class="choices__icon"><use xlink:href="assets/images/icon.svg#icon_angle"</svg></div>
            </div>
          `);
        },
        choice(data) {
          return template(`
            <div class="${classNames.item} ${classNames.itemChoice} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}" data-select-text="${itemSelectText}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
              <img src="${data.customProperties.img}" alt="${data.label}" class="choices__image">
            </div>
          `);
        },
      };
    },
  });
  console.log(choices.getValue());
  /* eslint-enable object-shorthand */
  /* eslint-enable no-unused-vars */
}
