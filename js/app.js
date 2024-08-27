import { hiddenElement } from "./function/controllerEncriptador.js";
import { copiar } from "./function/copy.js";


window.oneClickEncriptar = function () {
  hiddenElement(
    "hidden__element",
    "contenedor__elementos__desincriptador",
    "area__presentacion__texto",
    "view__element",
    "encriptar"
  );
};

window.oneClickDesencriptar = function () {
  hiddenElement(
    "hidden__element",
    "contenedor__elementos__desincriptador",
    "area__presentacion__texto",
    "view__element",
    "desincriptar"
  );
};

window.copyText = function () {
  copiar();
};
