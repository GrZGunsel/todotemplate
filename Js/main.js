function drawer() {
  const Class = document.getElementById("navbar").classList;
  if (Class != "Responsive") {
    const drawer = document.getElementById("navbar");
    drawer.classList.add("Responsive");
  } else {
    const drawer = document.getElementById("navbar");
    drawer.classList.remove("Responsive");
  }

  console.log(Class);
}
