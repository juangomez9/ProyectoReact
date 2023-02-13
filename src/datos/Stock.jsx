function Producto(
  id,
  categoria,
  subcategoria,
  nombre,
  precio,
  descripcion,
  stock
) {
  this.categoria = categoria;
  this.subcategoria = subcategoria;
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.descripcion = descripcion;
  this.stock = stock;
}

export const StockProductos = [];

// SECTOR ALMACEN //
StockProductos.push(
  new Producto(
    1,
    "Almacen",
    "Alimentos",
    "Arroz Dos Hermanos Largo fino",
    230,
    "Largo fino 500gr",
    35
  )
);
StockProductos.push(
  new Producto(
    2,
    "Almacen",
    "Alimentos",
    "Arroz Dos Hermanos Parboil",
    230,
    "Parboil 500gr",
    35
  )
);
StockProductos.push(
  new Producto(
    3,
    "Almacen",
    "Alimentos",
    "Arroz Dos Hermanos Doble Carolina",
    250,
    "Doble Carolina 500gr",
    35
  )
);
StockProductos.push(
  new Producto(
    4,
    "Almacen",
    "Alimentos",
    "Arroz Dos Hermanos Largo fino",
    300,
    "Largo fino 1kgr",
    30
  )
);
StockProductos.push(
  new Producto(
    5,
    "Almacen",
    "Alimentos",
    "Arroz Dos Hermanos Parboil",
    300,
    "Parboil 1kgr",
    25
  )
);
StockProductos.push(
  new Producto(
    6,
    "Almacen",
    "Alimentos",
    "Arroz Dos Hermanos Largo fino",
    330,
    "Doble Carotlina 1kgr",
    25
  )
);

// BARRAS DE CEREAL //
StockProductos.push(
  new Producto(
    7,
    "Almacen",
    "Barra de Cereal",
    "Barra de Cereal Frutilla",
    1500,
    "Barra de 70gr",
    12
  )
);
StockProductos.push(
  new Producto(
    8,
    "Almacen",
    "Barra de Cereal",
    "Barra de Cereal Frutos del Bosque",
    1500,
    "Barra de 70gr",
    15
  )
);
StockProductos.push(
  new Producto(
    9,
    "Almacen",
    "Barra de Cereal",
    "Barra de Cereal Chocolate",
    1500,
    "Barra de 70gr",
    5
  )
);
StockProductos.push(
  new Producto(
    10,
    "Almacen",
    "Barra de Cereal",
    "Barra de Cereal Light",
    1500,
    "Barra de 70gr",
    10
  )
);

// ENLATADOS //
StockProductos.push(
  new Producto(
    11,
    "Almacen",
    "Enlatados",
    "Atun en aceite Penissi",
    560,
    "Atun 200gr",
    15
  )
);
StockProductos.push(
  new Producto(
    12,
    "Almacen",
    "Enlatados",
    "Atun al natural Penissi",
    560,
    "Atun 200gr",
    15
  )
);

// TOSTADAS //
StockProductos.push(
  new Producto(
    13,
    "Almacen",
    "Tostadas",
    "Tostada Firenze x10",
    1500,
    "Tostada 920gr",
    30
  )
);
StockProductos.push(
  new Producto(
    14,
    "Almacen",
    "Tostadas",
    "Tostada Riski-D con sal",
    245,
    "Tostada 250gr",
    10
  )
);
StockProductos.push(
  new Producto(
    15,
    "Almacen",
    "Tostadas",
    "Tostada Riski-D sin sal",
    245,
    "Tostada 250gr",
    10
  )
);

// YERBAS //
StockProductos.push(
  new Producto(
    16,
    "Almacen",
    "Yerba Don Arregui",
    "Yerba Don Arregui Compuesta",
    320,
    "Yerba 500gr",
    25
  )
);
StockProductos.push(
  new Producto(
    17,
    "Almacen",
    "Yerba Don Arregui",
    "Yerba Don Arregui Peperina",
    320,
    "Yerba 500gr",
    25
  )
);
StockProductos.push(
  new Producto(
    18,
    "Almacen",
    "Yerba Don Arregui",
    "Yerba Don Arregui Burrito",
    320,
    "Yerba 500gr",
    25
  )
);
StockProductos.push(
  new Producto(
    19,
    "Almacen",
    "Yerba Don Arregui",
    "Yerba Don Arregui Cedron",
    320,
    "Yerba 500gr",
    25
  )
);

// SECTOR CHOCOLATES //
StockProductos.push(
  new Producto(
    20,
    "Chocolates",
    "Felfort",
    "Dos Corazones",
    2100,
    "Bocaditos 50gr",
    25
  )
);
StockProductos.push(
  new Producto(
    21,
    "Chocolates",
    "Felfort",
    "Paraguitas",
    1990,
    "Paraguitas 15gr",
    25
  )
);
StockProductos.push(
  new Producto(
    22,
    "Chocolates",
    "Felfort",
    "Chocolate Jack",
    2300,
    "Chocolate 25gr",
    25
  )
);
StockProductos.push(
  new Producto(
    23,
    "Chocolates",
    "Georgalos",
    "Tableta Tokke Negro",
    150,
    "Chocolate relleno DL 70gr",
    25
  )
);
StockProductos.push(
  new Producto(
    24,
    "Chocolates",
    "Georgalos",
    "Tableta Tokke Blanca",
    150,
    "Chocolate relleno DL 70gr",
    25
  )
);

// SECTOR KIOSCO //
StockProductos.push(
  new Producto(
    25,
    "Kiosco",
    "Alfajores",
    "Alfajor vimar x3 Negro",
    1390,
    "Alfajor x24u",
    25
  )
);
StockProductos.push(
  new Producto(
    26,
    "Kiosco",
    "Alfajores",
    "Alfajor vimar x3 Blanco",
    1390,
    "Alfajor x24u",
    25
  )
);
StockProductos.push(
  new Producto(
    27,
    "Kiosco",
    "Alfajores",
    "Alfajor Transsens",
    1700,
    "Alfajor relleno DL x12u",
    15
  )
);
StockProductos.push(
  new Producto(
    28,
    "Kiosco",
    "Alfajores",
    "Alfajor Full Mani",
    2315,
    "Alfajor x30u",
    25
  )
);

// GALLETAS //
StockProductos.push(
  new Producto(
    30,
    "Kiosco",
    "Galletas",
    "Pepas TRIO",
    211,
    "Galleta rellena x350gr",
    30
  )
);
StockProductos.push(
  new Producto(
    31,
    "Kiosco",
    "Galletas",
    "Pepas con chip TRIO",
    211,
    "Galleta rellena x350gr",
    30
  )
);
StockProductos.push(
  new Producto(
    32,
    "Kiosco",
    "Galletas",
    "Pepas Alemanas TRIO",
    211,
    "Galleta rellena x350gr",
    15
  )
);
StockProductos.push(
  new Producto(
    33,
    "Kiosco",
    "Galletas",
    "Trichip TRIO",
    211,
    "Galleta x350gr",
    15
  )
);
StockProductos.push(
  new Producto(
    34,
    "Kiosco",
    "Galletas",
    "Trichoc TRIO",
    211,
    "Galleta x350gr",
    15
  )
);
StockProductos.push(
  new Producto(
    35,
    "Kiosco",
    "Galletas",
    "Tarteletta Frutilla TRIO",
    211,
    "Galleta rellena x350gr",
    15
  )
);
StockProductos.push(
  new Producto(
    36,
    "Kiosco",
    "Galletas",
    "Tarteletta Frutos Bosque TRIO",
    211,
    "Galleta rellena x350gr",
    15
  )
);
StockProductos.push(
  new Producto(
    37,
    "Kiosco",
    "Galletas",
    "Cookies Cafe",
    310,
    "Galleta x350gr",
    10
  )
);
StockProductos.push(
  new Producto(
    38,
    "Kiosco",
    "Galletas",
    "Cookies Miel",
    310,
    "Galleta x350gr",
    10
  )
);
StockProductos.push(
  new Producto(
    39,
    "Kiosco",
    "Galletas",
    "Cookies Limon",
    310,
    "Galleta x350gr",
    10
  )
);

// GOLOSINAS //
StockProductos.push(
  new Producto(
    40,
    "Kiosco",
    "Golosinas",
    "Jelly Roll",
    1110,
    "Caramelo de goma x1gr",
    15
  )
);
StockProductos.push(
  new Producto(
    41,
    "Kiosco",
    "Golosinas",
    "Fantasia",
    1110,
    "Caramelo de goma x1gr",
    15
  )
);
StockProductos.push(
  new Producto(
    42,
    "Kiosco",
    "Golosinas",
    "Eucaliptus",
    1110,
    "Caramelo de goma x1gr",
    15
  )
);
StockProductos.push(
  new Producto(
    43,
    "Kiosco",
    "Golosinas",
    "Cosmo Fruta",
    700,
    "Chupetin x230u",
    15
  )
);
StockProductos.push(
  new Producto(
    44,
    "Kiosco",
    "Golosinas",
    "Mega Cosmo",
    990,
    "Chupetin con chicle x100u",
    15
  )
);
StockProductos.push(
  new Producto(
    45,
    "Kiosco",
    "Golosinas",
    "Masticable Billiken",
    1215,
    "Caramelo masticable x1gr",
    15
  )
);
StockProductos.push(
  new Producto(
    46,
    "Kiosco",
    "Golosinas",
    "Masticable Misky",
    1310,
    "Caramelo masticable x1gr",
    15
  )
);

// SNACKS //
StockProductos.push(
  new Producto(
    47,
    "Kiosco",
    "Snacks",
    "Snacks Riski-D jamon",
    200,
    "Snack x70gr",
    20
  )
);
StockProductos.push(
  new Producto(
    48,
    "Kiosco",
    "Snacks",
    "Snacks Riski-D jamon",
    200,
    "Snack x70gr",
    20
  )
);
StockProductos.push(
  new Producto(
    49,
    "Kiosco",
    "Snacks",
    "Snacks Riski-D cebolla",
    200,
    "Snack x70gr",
    20
  )
);

// TURRONES //
StockProductos.push(
  new Producto(
    50,
    "Kiosco",
    "Turrones",
    "Turrones misky",
    30,
    "Turron x20gr",
    20
  )
);
StockProductos.push(
  new Producto(
    51,
    "Kiosco",
    "Turrones",
    "Turrones piñata",
    22,
    "Turron x20gr",
    20
  )
);

// SECTOR TABAQUERIA //
StockProductos.push(
  new Producto(
    52,
    "Tabaqueria",
    "Armadores",
    "Armador Gizeh",
    500,
    "Armador de tabaco",
    10
  )
);

// CIGARRILLOS //
StockProductos.push(
  new Producto(
    53,
    "Tabaqueria",
    "Cigarrillos",
    "Milenio Click Box",
    2420,
    "Box x20u",
    20
  )
);
StockProductos.push(
  new Producto(
    54,
    "Tabaqueria",
    "Cigarrillos",
    "Milenio Red Box",
    2300,
    "Box x20u",
    20
  )
);
StockProductos.push(
  new Producto(
    55,
    "Tabaqueria",
    "Cigarrillos",
    "Milenio Gold Box",
    2300,
    "Box x20u",
    20
  )
);
StockProductos.push(
  new Producto(
    56,
    "Tabaqueria",
    "Cigarrillos",
    "Milenio Mint Box",
    2300,
    "Box x20u",
    20
  )
);

// FILTROS //
StockProductos.push(
  new Producto(
    57,
    "Tabaqueria",
    "Filtros",
    "Filtros Gizeh",
    200,
    "Filtros x50u",
    20
  )
);

// TABACOS //
StockProductos.push(
  new Producto(
    58,
    "Tabaqueria",
    "Tabacos",
    "Tabaco LeBoon",
    1440,
    "Paquete x10u",
    20
  )
);
StockProductos.push(
  new Producto(
    59,
    "Tabaqueria",
    "Tabacos",
    "Tabaco Van Haasen Natural",
    3500,
    "Box x12u",
    20
  )
);
StockProductos.push(
  new Producto(
    60,
    "Tabaqueria",
    "Tabacos",
    "Tabaco Van Haasen Chocolate",
    3500,
    "Box x12u",
    20
  )
);
StockProductos.push(
  new Producto(
    61,
    "Tabaqueria",
    "Tabacos",
    "Tabaco Van Haasen Frutilla",
    3500,
    "Box x12u",
    20
  )
);

// SEDAS //
StockProductos.push(
  new Producto(62, "Tabaqueria", "Sedas", "Sedas Gizeh", 200, "Box x20u", 20)
);

// SECTOR VINOS //
StockProductos.push(
  new Producto(63, "Vinos", "Etnia", "Etnia Malbec", 2980, "Caja x6u", 40)
);
StockProductos.push(
  new Producto(64, "Vinos", "Etnia", "Etnia Carbernet", 2980, "Caja x6u", 40)
);
StockProductos.push(
  new Producto(65, "Vinos", "Etnia", "Etnia Merlot", 2980, "Caja x6u", 40)
);
StockProductos.push(
  new Producto(66, "Vinos", "Etnia", "Etnia Sirah", 2980, "Caja x6u", 40)
);
StockProductos.push(
  new Producto(67, "Vinos", "Quara", "Quara Malbec", 2300, "Caja x6u", 40)
);
StockProductos.push(
  new Producto(68, "Vinos", "Quara", "Queara Torrontes", 2300, "Caja x6u", 40)
);
StockProductos.push(
  new Producto(
    69,
    "Vinos",
    "Fuego Negro",
    "Fuego Negro Malbec",
    5000,
    "Caja x6u",
    40
  )
);
StockProductos.push(
  new Producto(
    70,
    "Vinos",
    "Fuego Negro",
    "Fuego Negro Blanco Dulce",
    5000,
    "Caja x6u",
    40
  )
);
StockProductos.push(
  new Producto(
    71,
    "Vinos",
    "Fuego Negro",
    "Fuego Negro Etiqueta Negra",
    7000,
    "Caja x6u",
    40
  )
);
StockProductos.push(
  new Producto(
    72,
    "Vinos",
    "Valle de Luna",
    "Valle de Luna Malbec",
    4000,
    "Caja x6u",
    40
  )
);
StockProductos.push(
  new Producto(
    73,
    "Vinos",
    "Valle de Luna",
    "Valle de Luna Blanco Dulce",
    4000,
    "Caja x6u",
    40
  )
);
StockProductos.push(
  new Producto(
    74,
    "Vinos",
    "Fincas las Margaritas",
    "Finca las Margaritas Malbec",
    3500,
    "Caja x6u",
    40
  )
);
StockProductos.push(
  new Producto(
    75,
    "Vinos",
    "Fincas las Margaritas",
    "Finca las Margaritas Blanco",
    3500,
    "Caja x6u",
    40
  )
);
