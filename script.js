const piece = [ 
{
    cover: "imgs/IMG_6208_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6211_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6217_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6226_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6233_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6323_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6328_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6202_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6213_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6216_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6224_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6234_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6325_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6204_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6209_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6215_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6219_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6227_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6235_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6205_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6210_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6223_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6228_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6231_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6327_.png"
    fullimg:
    about:
    materials:
},
{
    cover: "imgs/IMG_6329_.png"
    fullimg:
    about:
    materials:
},
];

window.addEventListener("load", () => {
  init();
});

const init = function () {
  const pieceGrid = document.getElementById("piecegrid");


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
    <div class="dog-item"
            <div class="dog-info">
                <img src=${dog.img}>
                <div class="text-info">
                    <h1>${dog.name}</h1>
                    <h2> Year with most bites: ${dog.year}</h2>
                    <h2> Borough with most bites: ${dog.borough}</h2>
                    <h2> Percentage of total bites committed from list: ${dog.percent}</h2x>
                </div>
            </div>
    </div>`;
};

const buildPieceItem =function (piece, i){
    return `<div class="piece-item" style="left: ${piece.x}%; top: ${piece.y}%" id=${i}>
            <img src=${piece.cover}>
        </div>`;
}
