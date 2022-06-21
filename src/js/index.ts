const inches = document.getElementById("inches") as HTMLInputElement;
const centim = document.getElementById("centimeter") as HTMLInputElement;

function conversor(inc: number, cm: number, type: string) {
  if (type === "inc") {
    centim.value = (inc * 2.54).toString();
    return;
  }

  inches.value = (cm * 0.393701).toString();
}

inches.addEventListener("input", function (e) {
  conversor(+this.value, 0, "inc");
});

centim.addEventListener("input", function (e) {
  conversor(0, +this.value, "cen");
});
