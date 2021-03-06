import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import anchor from '../blocks/js-functions/anchor';
import { freezebuttons } from '../blocks/js-functions/freeze';
import { selects, sliders, datepicker, inputmask, numberinput } from '../blocks/form-elements/form-elements';
import popups from '../blocks/popups/popups';
import scrollbar from '../blocks/scrollbar/scrollbar';
import slider from '../blocks/slider/slider';
import '../blocks/dropdown/dropdown';
import languageSelect from '../blocks/language/language';
import diagramms from '../blocks/diagramm/diagramm';
import updatePrice from '../blocks/rate/rate';
import switchTextToEdit from '../components/popup-profile/popup-profile';
import editAvatar from '../blocks/upload/upload';
import { showPass, formStepsSwitcher } from '../blocks/form/form';
import verifyForm from '../blocks/verification/verification';
import tabs from '../blocks/tabs/tabs';
import cryptocurrencyChosen from '../components/popup-buy-tokens/popup-buy-tokens';
import '../blocks/accordion/accordion';
import copiedBlock from '../blocks/copied-block/copied-block';
import calculator from '../components/popup-exchange/popup-exchange';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  anchor();
  freezebuttons();
  selects();
  sliders();
  popups();
  scrollbar();
  slider();
  datepicker();
  inputmask();
  numberinput();
  languageSelect();
  diagramms();
  updatePrice();
  switchTextToEdit();
  editAvatar();
  showPass();
  formStepsSwitcher();
  verifyForm();
  tabs();
  cryptocurrencyChosen();
  copiedBlock();
  calculator();
});
