$(() => {
  //element references
  const downloadBTN = $(".downloadBTN");
  const backdropCloseBTN = $(".backdropCloseBTN");
  const backdrop = $(".backdrop");

  //function declarations
  const openBackdrop = (e) => {
    backdrop.show();
  };
  const closeBackdrop = (e) => {
    backdrop.hide();
  };

  //handlers
  backdrop.hide();
  downloadBTN.on("click", openBackdrop);
  backdropCloseBTN.on("click", closeBackdrop);
});
