const piece = [ 
{
    cover: "imgs/IMG_6208_.png"
    fullimg:"imgs/IMG_6208.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6211_.png"
    fullimg:"imgs/IMG_6211.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6217_.png"
    fullimg:"imgs/IMG_6217.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6226_.png"
    fullimg:"imgs/IMG_6226.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6233_.png"
    fullimg:"imgs/IMG_6233.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6323_.png"
    fullimg:"imgs/IMG_6323.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6328_.png"
    fullimg:"imgs/IMG_6328.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6202_.png"
    fullimg:"imgs/IMG_6202.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6213_.png"
    fullimg:"imgs/IMG_6213.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6216_.png"
    fullimg:"imgs/IMG_6216.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6224_.png"
    fullimg:"imgs/IMG_6224.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6234_.png"
    fullimg:"imgs/IMG_6234.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6325_.png"
    fullimg:"imgs/IMG_6325.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6204_.png"
    fullimg:"imgs/IMG_6204.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6209_.png"
    fullimg:"imgs/IMG_6209.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6215_.png"
    fullimg:"imgs/IMG_6215.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6219_.png"
    fullimg:"imgs/IMG_6219.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6227_.png"
    fullimg:"imgs/IMG_6227.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6235_.png"
    fullimg:"imgs/IMG_6235.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6205_.png"
    fullimg:"imgs/IMG_6205.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6210_.png"
    fullimg:"imgs/IMG_6210.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6223_.png"
    fullimg:"imgs/IMG_6223.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6228_.png"
    fullimg:"imgs/IMG_6228.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6231_.png"
    fullimg:"imgs/IMG_6231.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6327_.png"
    fullimg:"imgs/IMG_6327.png"
    type: "Brooch"
    about:
    materials:
},
{
    cover: "imgs/IMG_6329_.png"
    fullimg:"imgs/IMG_6329.png"
    type: "Brooch"
    about:
    materials:
},
];

window.addEventListener("load", () => {
  init();
});

const init = function () {
  const pieceGrid = document.getElementById("pieceGrid");


  piece.map(function (piece, i) {
    const pieceItem = buildPieceItem(piece, i);
    pieceGrid.innerHTML = pieceGrid.innerHTML + pieceItem;
  });

  let pieceDivs = [...document.getElementsByClassName("piece-item")];

  pieceDivs.map((pieceDiv, i) => {
    pieceDiv.addEventListener(
      "click",

      () => {
        activatePopUp(piece[i]);
      }
    );
  });
};

const activatePopUp = function (piece) {
  document.body.style.overflow = "hidden";
  var popUp = document.getElementById("pop-up-wrapper");
  popUp.style.display = "block";
  var popUpDisplay = document.getElementById("pop-up-data");

  const newDetailView = buildDetailPieceItem(piece);

  popUpDisplay.innerHTML = newDetailView;
};

const buildDetailPieceItem = function (piece, i) {
  return `<div class="piece-detail" id=${i}>
    <h2>${piece.type}</h2>
        <img src=${piece.fullimg}>
    </div>`;
};

const buildPieceItem = function (piece, i) {
  return `<div class="piece-item" style="left: ${piece.x}%; top: ${piece.y}%" id=${i}>
        <img src=${piece.cover}>
    </div>`;
};

// <div class="summary">
// <p>${book.genre}</p
// <p>${book.summary}<p></div>

