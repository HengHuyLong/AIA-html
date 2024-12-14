function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("active");
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("active");
}

document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document
  .querySelectorAll(".sidebar-dropdown > a")
  .forEach(function (item) {
    item.addEventListener("click", function (event) {
      const dropdown = this.closest(".sidebar-dropdown"); // Get the parent dropdown container
      const dropdownMenu = dropdown.querySelector(".dropdown_link"); // Get the dropdown menu

      // Toggle the 'active' class to show or hide the dropdown
      dropdown.classList.toggle("active");

      // Optionally close any other open dropdowns (if you want one open at a time)
      document
        .querySelectorAll(".sidebar-dropdown")
        .forEach(function (otherDropdown) {
          if (
            otherDropdown !== dropdown &&
            otherDropdown.classList.contains("active")
          ) {
            otherDropdown.classList.remove("active");
          }
        });

      // Prevent the default link behavior
      event.preventDefault();
    });
  });
  