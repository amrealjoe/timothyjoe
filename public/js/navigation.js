$(() => {
  //element references
  const downloadBTN = $(".downloadBTN");
  const backdropCloseBTN = $(".backdropCloseBTN");
  const backdrop = $(".backdrop");
  const sidebar = $(".sidebar")
  const openSidebarBTN = $(".openSidebarBTN");
  const closeSidebarBTN = $(".closeSidebarBTN");

  //function declarations
  const openBackdrop = (e) => {
    backdrop.show();
  };
  const closeBackdrop = (e) => {
    backdrop.hide();
  };
  const hideSidebar = (e) => {
    sidebar.hide()
  }
  const openSidebar = (e) => {
    sidebar.show();
  }

  //backdrop for resume download
  backdrop.hide();
  downloadBTN.on("click", openBackdrop);
  backdropCloseBTN.on("click", closeBackdrop);

  //sidebar menu/tab
  sidebar.hide();
  sidebar.on("click", hideSidebar);
  openSidebarBTN.on("click", openSidebar);
});
