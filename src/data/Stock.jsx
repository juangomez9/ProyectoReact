import vimarBlanco from "../assets/Alfajor-Blanco.jpg"
import vimarNegro from "../assets/Alfajor-Negro.jpg"
import arrozLF from "../assets/Almacen-Arroz-LF.jpg"
import arrozParboil from "../assets/Almacen-Arroz-Parboil.jpg"
import dosCorazones from "../assets/Chocolate-Doscorazones.jpg"
import paraguitas from "../assets/Chocolates-Paraguitas.jpg"
import milenioClick from "../assets/Cigarrillos-MilenioClick.jpg"
import milenioRed from "../assets/Cigarrillos-MilenioRed.jpg"
import atunAceite from "../assets/Enlatados-Atun-Aceite.jpg"
import atunNatural from "../assets/Enlatados-Atun-Natural.jpg"
import pepasTrio from "../assets/Galletas-PepasTrio.jpg"
import pepasChips from "../assets/Galletas-PepasChips.jpg"
import fantasia from "../assets/Golosinas-Fantasia.jpg"
import jellyRoll from "../assets/Golosinas-JellyRoll.jpg"
import snackJamon from "../assets/Snack-Riskid-jamon.jpg"
import snackQueso from "../assets/Snack-Riskid-queso.jpg"
import armador from "../assets/Tabaqueria-Armador.jpg"
import vanHaasen from "../assets/Tabaqueria-VanHaasen.jpg"
import mediaTarde from "../assets/Tostada-MediaTarde.jpg"
import barraCereal from "../assets/barracereal.jpg"
import tostadaRiskid from "../assets/Tostada-Riskid-sal.jpg"
import eucaliptus from "../assets/Golosinas-eucaliptus.jpg"
import etniaMalbec from "../assets/Vino-EtniaMalbec.jpg"
import etniaCabernet from "../assets/Vino-EtniaCabernet.jpg"

function Producto(
  id,
  categoria,
  nombre,
  precio,
  descripcion,
  stock,
  img
) {
  this.categoria = categoria;
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.descripcion = descripcion;
  this.stock = stock;
  this.img = img;
}

export const StockProductos = [];

// SECTOR ALMACEN //
StockProductos.push(
  new Producto(
    1,
    "Alimentos",
    "Arroz Dos Hermanos Largo fino",
    230,
    "Largo fino 500gr",
    35,
    arrozLF
  )
);
StockProductos.push(
  new Producto(
    2,
    "Alimentos",
    "Arroz Dos Hermanos Parboil",
    230,
    "Parboil 500gr",
    35,
    arrozParboil
  )
);

// BARRAS DE CEREAL //
StockProductos.push(
  new Producto(
    3,
    "Kiosco",
    "Barra de Cereal Mix",
    1500,
    "Barra de 70gr",
    12,
    barraCereal
  )
);

// ENLATADOS //
StockProductos.push(
  new Producto(
    5,
    "Alimentos",
    "Atun en aceite Penissi",
    560,
    "Atun 200gr",
    15,
    atunAceite
  )
);
StockProductos.push(
  new Producto(
    6,
    "Alimentos",
    "Atun al natural Penissi",
    560,
    "Atun 200gr",
    15,
    atunNatural
  )
);

// TOSTADAS //
StockProductos.push(
  new Producto(
    7,
    "Alimentos",
    "Tostada Media Tarde",
    300,
    "Tostada 920gr",
    30,
    mediaTarde
  )
);
StockProductos.push(
  new Producto(
    8,
    "Alimentos",
    "Tostada Riski-D con sal",
    245,
    "Tostada 250gr",
    10,
    tostadaRiskid
  )
);

// SECTOR CHOCOLATES //
StockProductos.push(
  new Producto(
    10,
    "Chocolates",
    "Dos Corazones",
    2100,
    "Bocaditos 50gr",
    25,
    dosCorazones
  )
);
StockProductos.push(
  new Producto(
    11,
    "Chocolates",
    "Paraguitas",
    1990,
    "Paraguitas 15gr",
    25,
    paraguitas
  )
);

// SECTOR KIOSCO //
StockProductos.push(
  new Producto(
    12,
    "Kiosco",
    "Alfajor vimar x3 Negro",
    1390,
    "Alfajor x24u",
    25,
    vimarNegro
  )
);
StockProductos.push(
  new Producto(
    13,
    "Kiosco",
    "Alfajor vimar x3 Blanco",
    1390,
    "Alfajor x24u",
    25,
    vimarBlanco
  )
);

// GALLETAS //
StockProductos.push(
  new Producto(
    14,
    "Kiosco",
    "Pepas TRIO",
    211,
    "Galleta rellena x350gr",
    30,
    pepasTrio
  )
);
StockProductos.push(
  new Producto(
    15,
    "Kiosco",
    "Pepas con chip TRIO",
    211,
    "Galleta rellena x350gr",
    30,
    pepasChips
  )
);

// GOLOSINAS //
StockProductos.push(
  new Producto(
    16,
    "Kiosco",
    "Jelly Roll",
    1110,
    "Caramelo de goma x1gr",
    15,
    jellyRoll
  )
);
StockProductos.push(
  new Producto(
    17,
    "Kiosco",
    "Fantasia",
    1110,
    "Caramelo de goma x1gr",
    15,
    fantasia
  )
);
StockProductos.push(
  new Producto(
    18,
    "Kiosco",
    "Eucaliptus",
    1110,
    "Caramelo de goma x1gr",
    15,
    eucaliptus
  )
);

// SNACKS //
StockProductos.push(
  new Producto(
    19,
    "Kiosco",
    "Snacks Riski-D jamon",
    200,
    "Snack x70gr",
    20,
    snackJamon
  )
);
StockProductos.push(
  new Producto(
    20,
    "Kiosco",
    "Snacks Riski-D queso",
    200,
    "Snack x70gr",
    20,
    snackQueso
  )
);

// SECTOR TABAQUERIA //
StockProductos.push(
  new Producto(
    21,
    "Tabaqueria",
    "Armador Gizeh",
    500,
    "Armador de tabaco",
    10,
    armador
  )
);

// CIGARRILLOS //
StockProductos.push(
  new Producto(
    22,
    "Tabaqueria",
    "Milenio Click Box",
    2420,
    "Box x20u",
    20,
    milenioClick
  )
);
StockProductos.push(
  new Producto(
    23,
    "Tabaqueria",
    "Milenio Red Box",
    2300,
    "Box x20u",
    20,
    milenioRed
  )
);

// TABACOS //
StockProductos.push(
  new Producto(
    24,
    "Tabaqueria",
    "Tabaco Van Haasen Natural",
    3500,
    "Box x12u",
    20,
    vanHaasen
  )
);

// SECTOR VINOS //
StockProductos.push(
  new Producto(25, "Vinos", "Etnia Malbec", 2980, "Caja x6u", 40, etniaMalbec)
);
StockProductos.push(
  new Producto(26, "Vinos", "Etnia Carbernet", 2980, "Caja x6u", 40, etniaCabernet)
);

function ProductoMuestra(producto) {
  this.producto = producto;
}
export const muestraProductos = [];
muestraProductos.push(
  new ProductoMuestra(1)
);
muestraProductos.push(
  new ProductoMuestra(10)
);
muestraProductos.push(
  new ProductoMuestra(15)
);
muestraProductos.push(
  new ProductoMuestra(20)
);
