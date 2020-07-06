// On Document Ready...
jQuery( document ).ready( function( $ ) {
    if(typeof Marionette == 'undefined') {
        return;
    }
    var colombiaFieldController = Marionette.Object.extend( {

        states: [
            {
                "attributes": {
                    "Codigo": "10334",
                    "Nombre": "Amazonas"
                }
            },
            {
                "attributes": {
                    "Codigo": "10306",
                    "Nombre": "Antioquia"
                }
            },
            {
                "attributes": {
                    "Codigo": "10330",
                    "Nombre": "Arauca"
                }
            },
            {
                "attributes": {
                    "Codigo": "10307",
                    "Nombre": "Atlantico"
                }
            },
            {
                "attributes": {
                    "Codigo": "10308",
                    "Nombre": "Bogota, D.C."
                }
            },
            {
                "attributes": {
                    "Codigo": "10309",
                    "Nombre": "Bolivar"
                }
            },
            {
                "attributes": {
                    "Codigo": "10310",
                    "Nombre": "Boyaca"
                }
            },
            {
                "attributes": {
                    "Codigo": "10311",
                    "Nombre": "Caldas"
                }
            },
            {
                "attributes": {
                    "Codigo": "10312",
                    "Nombre": "Caqueta"
                }
            },
            {
                "attributes": {
                    "Codigo": "10331",
                    "Nombre": "Casanare"
                }
            },
            {
                "attributes": {
                    "Codigo": "10313",
                    "Nombre": "Cauca"
                }
            },
            {
                "attributes": {
                    "Codigo": "10314",
                    "Nombre": "Cesar"
                }
            },
            {
                "attributes": {
                    "Codigo": "10317",
                    "Nombre": "Choco"
                }
            },
            {
                "attributes": {
                    "Codigo": "10315",
                    "Nombre": "Cordoba"
                }
            },
            {
                "attributes": {
                    "Codigo": "10316",
                    "Nombre": "Cundinamarca"
                }
            },
            {
                "attributes": {
                    "Codigo": "10335",
                    "Nombre": "Guainia"
                }
            },
            {
                "attributes": {
                    "Codigo": "10336",
                    "Nombre": "Guaviare"
                }
            },
            {
                "attributes": {
                    "Codigo": "10318",
                    "Nombre": "Huila"
                }
            },
            {
                "attributes": {
                    "Codigo": "10319",
                    "Nombre": "La Guajira"
                }
            },
            {
                "attributes": {
                    "Codigo": "10320",
                    "Nombre": "Magdalena"
                }
            },
            {
                "attributes": {
                    "Codigo": "10321",
                    "Nombre": "Meta"
                }
            },
            {
                "attributes": {
                    "Codigo": "10322",
                    "Nombre": "Nariño"
                }
            },
            {
                "attributes": {
                    "Codigo": "10323",
                    "Nombre": "Norte de Santander"
                }
            },
            {
                "attributes": {
                    "Codigo": "10332",
                    "Nombre": "Putumayo"
                }
            },
            {
                "attributes": {
                    "Codigo": "10324",
                    "Nombre": "Quindio"
                }
            },
            {
                "attributes": {
                    "Codigo": "10325",
                    "Nombre": "Risaralda"
                }
            },
            {
                "attributes": {
                    "Codigo": "10333",
                    "Nombre": "San Andres y Providencia"
                }
            },
            {
                "attributes": {
                    "Codigo": "10326",
                    "Nombre": "Santander"
                }
            },
            {
                "attributes": {
                    "Codigo": "10327",
                    "Nombre": "Sucre"
                }
            },
            {
                "attributes": {
                    "Codigo": "10328",
                    "Nombre": "Tolima"
                }
            },
            {
                "attributes": {
                    "Codigo": "10329",
                    "Nombre": "Valle del Cauca"
                }
            },
            {
                "attributes": {
                    "Codigo": "10337",
                    "Nombre": "Vaupes"
                }
            },
            {
                "attributes": {
                    "Codigo": "10338",
                    "Nombre": "Vichada"
                }
            }
        ],
        cities: [
            {
                "attributes": {
                    "Codigo": "10340",
                    "Nombre": "Abejorral_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11116",
                    "Nombre": "Abrego_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10341",
                    "Nombre": "Abriaqui_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11023",
                    "Nombre": "Acacias_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10910",
                    "Nombre": "Acandí_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10941",
                    "Nombre": "Acevedo_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10489",
                    "Nombre": "Achi_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10942",
                    "Nombre": "Agrado_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10793",
                    "Nombre": "Agua de dios_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10741",
                    "Nombre": "Aguachica_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "11182",
                    "Nombre": "Aguada_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10657",
                    "Nombre": "Aguadas_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11391",
                    "Nombre": "Aguazul_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "10742",
                    "Nombre": "Agustín codazzi_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10943",
                    "Nombre": "Aipe_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10794",
                    "Nombre": "Alban_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10684",
                    "Nombre": "Albania_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "10978",
                    "Nombre": "Albania_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "11183",
                    "Nombre": "Albania_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11342",
                    "Nombre": "Alcalá_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11053",
                    "Nombre": "Aldana_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10342",
                    "Nombre": "Alejandria_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10993",
                    "Nombre": "Algarrobo_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10944",
                    "Nombre": "Algeciras_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10700",
                    "Nombre": "Almaguer_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10534",
                    "Nombre": "Almeida_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11295",
                    "Nombre": "Alpujarra_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10945",
                    "Nombre": "Altamira_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10911",
                    "Nombre": "Alto baudo_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10490",
                    "Nombre": "Altos del rosario_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11296",
                    "Nombre": "Alvarado_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10343",
                    "Nombre": "Amagá_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10344",
                    "Nombre": "Amalfi_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11297",
                    "Nombre": "Ambalema_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10795",
                    "Nombre": "Anapoima_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11054",
                    "Nombre": "Ancuya_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11343",
                    "Nombre": "Andalucía_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10345",
                    "Nombre": "Andes_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10346",
                    "Nombre": "Angelópolis_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10347",
                    "Nombre": "Angostura_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10796",
                    "Nombre": "Anolaima_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10348",
                    "Nombre": "Anorí_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10658",
                    "Nombre": "Anserma_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11344",
                    "Nombre": "Ansermanuevo_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10350",
                    "Nombre": "Anzá_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11298",
                    "Nombre": "Anzoátegui_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10351",
                    "Nombre": "Apartadó_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11168",
                    "Nombre": "Apía_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "10867",
                    "Nombre": "Apulo_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10535",
                    "Nombre": "Aquitania_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10994",
                    "Nombre": "Aracataca_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10659",
                    "Nombre": "Aranzazu_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11184",
                    "Nombre": "Aratoca_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11383",
                    "Nombre": "Arauca_Arauca",
                    "DepartamentoID": "10330"
                }
            },
            {
                "attributes": {
                    "Codigo": "11384",
                    "Nombre": "Arauquita_Arauca",
                    "DepartamentoID": "10330"
                }
            },
            {
                "attributes": {
                    "Codigo": "10797",
                    "Nombre": "Arbelaez_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11055",
                    "Nombre": "Arboleda - Berruecos_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11117",
                    "Nombre": "Arboledas_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10352",
                    "Nombre": "Arboletes_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10536",
                    "Nombre": "Arcabuco_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10491",
                    "Nombre": "Arenal_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10353",
                    "Nombre": "Argelia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10701",
                    "Nombre": "Argelia_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11345",
                    "Nombre": "Argelia_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10995",
                    "Nombre": "Ariguani_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10492",
                    "Nombre": "Arjona_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10354",
                    "Nombre": "Armenia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11155",
                    "Nombre": "Armenia_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "11299",
                    "Nombre": "Armero_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10493",
                    "Nombre": "Arroyohondo_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10743",
                    "Nombre": "Astrea_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "11300",
                    "Nombre": "Ataco_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10912",
                    "Nombre": "Atrato_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10766",
                    "Nombre": "Ayapel_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10913",
                    "Nombre": "Bagadó_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10914",
                    "Nombre": "Bahia solano_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10915",
                    "Nombre": "Bajo baudo_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10702",
                    "Nombre": "Balboa_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11169",
                    "Nombre": "Balboa_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "10465",
                    "Nombre": "Baranoa_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10946",
                    "Nombre": "Baraya_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11056",
                    "Nombre": "Barbacoas_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10355",
                    "Nombre": "Barbosa_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11185",
                    "Nombre": "Barbosa_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11186",
                    "Nombre": "Barichara_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11024",
                    "Nombre": "Barranca de upia_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11187",
                    "Nombre": "Barrancabermeja_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10979",
                    "Nombre": "Barrancas_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "10494",
                    "Nombre": "Barranco de loba_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11436",
                    "Nombre": "Barranco minas_Guainia",
                    "DepartamentoID": "10335"
                }
            },
            {
                "attributes": {
                    "Codigo": "10464",
                    "Nombre": "Barranquilla_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10744",
                    "Nombre": "Becerril_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10660",
                    "Nombre": "Belalcazar_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10685",
                    "Nombre": "Belén de los andaquies_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "11170",
                    "Nombre": "Belén de umbría_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "10537",
                    "Nombre": "Belén_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11057",
                    "Nombre": "Belén_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10357",
                    "Nombre": "Bello_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10356",
                    "Nombre": "Belmira_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10798",
                    "Nombre": "Beltran_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10538",
                    "Nombre": "Berbeo_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10358",
                    "Nombre": "Betania_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10539",
                    "Nombre": "Beteitiva_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10359",
                    "Nombre": "Betulia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11188",
                    "Nombre": "Betulia_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10799",
                    "Nombre": "Bituima_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10540",
                    "Nombre": "Boavita_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11118",
                    "Nombre": "Bochalema_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10487",
                    "Nombre": "Bogota DC_Bogota DC",
                    "DepartamentoID": "10308"
                }
            },
            {
                "attributes": {
                    "Codigo": "10800",
                    "Nombre": "Bojaca_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10917",
                    "Nombre": "Bojayá_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10703",
                    "Nombre": "Bolívar_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11189",
                    "Nombre": "Bolívar_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11346",
                    "Nombre": "Bolívar_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10745",
                    "Nombre": "Bosconia_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10541",
                    "Nombre": "Boyaca_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10361",
                    "Nombre": "Briceño_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10542",
                    "Nombre": "Briceño_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11181",
                    "Nombre": "Bucaramanga_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11119",
                    "Nombre": "Bucarasica_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11347",
                    "Nombre": "Buenaventura_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10543",
                    "Nombre": "Buenavista_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10767",
                    "Nombre": "Buenavista_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11156",
                    "Nombre": "Buenavista_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "11269",
                    "Nombre": "Buenavista_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10704",
                    "Nombre": "Buenos aires_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11058",
                    "Nombre": "Buesaco_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11349",
                    "Nombre": "Bugalagrande_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10362",
                    "Nombre": "Buriticá_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10544",
                    "Nombre": "Busbanza_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10801",
                    "Nombre": "Cabrera_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11190",
                    "Nombre": "Cabrera_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11025",
                    "Nombre": "Cabuyaro_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11441",
                    "Nombre": "Cacahual_Guainia",
                    "DepartamentoID": "10335"
                }
            },
            {
                "attributes": {
                    "Codigo": "10363",
                    "Nombre": "Caceres_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10802",
                    "Nombre": "Cachipay_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11121",
                    "Nombre": "Cáchira_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11120",
                    "Nombre": "Cacota_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10364",
                    "Nombre": "Caicedo_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11350",
                    "Nombre": "Caicedonia_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11270",
                    "Nombre": "Caimito_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "11301",
                    "Nombre": "Cajamarca_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10705",
                    "Nombre": "Cajibío_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10803",
                    "Nombre": "Cajica_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10495",
                    "Nombre": "Calamar_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11445",
                    "Nombre": "Calamar_Guaviare",
                    "DepartamentoID": "10336"
                }
            },
            {
                "attributes": {
                    "Codigo": "11157",
                    "Nombre": "Calarcá_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "10365",
                    "Nombre": "Caldas_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10545",
                    "Nombre": "Caldas_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10706",
                    "Nombre": "Caldono_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11341",
                    "Nombre": "Cali_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11191",
                    "Nombre": "California_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11351",
                    "Nombre": "Calima_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10707",
                    "Nombre": "Caloto_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10366",
                    "Nombre": "Campamento_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10466",
                    "Nombre": "Campo de la cruz_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10947",
                    "Nombre": "Campoalegre_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10546",
                    "Nombre": "Campohermoso_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10768",
                    "Nombre": "Canalete_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10467",
                    "Nombre": "Candelaria_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "11352",
                    "Nombre": "Candelaria_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10496",
                    "Nombre": "Cantagallo_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10367",
                    "Nombre": "Cañasgordas_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10804",
                    "Nombre": "Caparrapi_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11192",
                    "Nombre": "Capitanejo_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10805",
                    "Nombre": "Caqueza_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10368",
                    "Nombre": "Caracoli_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10369",
                    "Nombre": "Caramanta_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11193",
                    "Nombre": "Carcasi_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10370",
                    "Nombre": "Carepa_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11302",
                    "Nombre": "Carmen de apicalá_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10806",
                    "Nombre": "Carmen de carupa_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10919",
                    "Nombre": "Carmen del darién_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10372",
                    "Nombre": "Carolina_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10686",
                    "Nombre": "Cartagena del chairá_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "10488",
                    "Nombre": "Cartagena_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11353",
                    "Nombre": "Cartago_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11449",
                    "Nombre": "Caruru_Vaupes",
                    "DepartamentoID": "10337"
                }
            },
            {
                "attributes": {
                    "Codigo": "11303",
                    "Nombre": "Casabianca_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11026",
                    "Nombre": "Castilla la nueva_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10373",
                    "Nombre": "Caucasia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11194",
                    "Nombre": "Cepita_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10769",
                    "Nombre": "Cereté_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10547",
                    "Nombre": "Cerinza_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11195",
                    "Nombre": "Cerrito_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10996",
                    "Nombre": "Cerro san antonio_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10920",
                    "Nombre": "Cértegui_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "11066",
                    "Nombre": "Chachagüi_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10807",
                    "Nombre": "Chaguani_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11274",
                    "Nombre": "Chalán_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "11392",
                    "Nombre": "Chámeza_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "11304",
                    "Nombre": "Chaparral_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11196",
                    "Nombre": "Charala_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11197",
                    "Nombre": "Charta_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10808",
                    "Nombre": "Chia_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10997",
                    "Nombre": "Chibolo_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10374",
                    "Nombre": "Chigorodó_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10770",
                    "Nombre": "Chimá_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11198",
                    "Nombre": "Chima_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10746",
                    "Nombre": "Chimichagua_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "11122",
                    "Nombre": "Chinácota_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10548",
                    "Nombre": "Chinavita_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10661",
                    "Nombre": "Chinchiná_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10771",
                    "Nombre": "Chinu_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10809",
                    "Nombre": "Chipaque_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11199",
                    "Nombre": "Chipata_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10549",
                    "Nombre": "Chiquinquira_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10562",
                    "Nombre": "Chiquiza_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10747",
                    "Nombre": "Chiriguaná_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10550",
                    "Nombre": "Chiscas_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10551",
                    "Nombre": "Chita_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11123",
                    "Nombre": "Chitagá_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10552",
                    "Nombre": "Chitaraque_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10553",
                    "Nombre": "Chivata_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10563",
                    "Nombre": "Chivor_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10810",
                    "Nombre": "Choachi_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10811",
                    "Nombre": "Choconta_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10497",
                    "Nombre": "Cicuco_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10772",
                    "Nombre": "Ciénaga de oro_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10998",
                    "Nombre": "Cienaga_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10554",
                    "Nombre": "Cienega_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11200",
                    "Nombre": "Cimitarra_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11158",
                    "Nombre": "Circasia_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "10375",
                    "Nombre": "Cisneros_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10360",
                    "Nombre": "Ciudad bolívar_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10499",
                    "Nombre": "Clemencia_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10376",
                    "Nombre": "Cocorná_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11305",
                    "Nombre": "Coello_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10812",
                    "Nombre": "Cogua_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10948",
                    "Nombre": "Colombia_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11059",
                    "Nombre": "Colón_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11410",
                    "Nombre": "Colón_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "11271",
                    "Nombre": "Colosó_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10555",
                    "Nombre": "Combita_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10377",
                    "Nombre": "Concepción_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11201",
                    "Nombre": "Concepción_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10378",
                    "Nombre": "Concordia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10999",
                    "Nombre": "Concordia_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10921",
                    "Nombre": "Condoto_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "11202",
                    "Nombre": "Confines_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11060",
                    "Nombre": "Consacá_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11061",
                    "Nombre": "Contadero_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11203",
                    "Nombre": "Contratacion_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11124",
                    "Nombre": "Convención_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10379",
                    "Nombre": "Copacabana_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10556",
                    "Nombre": "Coper_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10498",
                    "Nombre": "Cordoba_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11062",
                    "Nombre": "Cordoba_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11159",
                    "Nombre": "Cordoba_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "10708",
                    "Nombre": "Corinto_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11204",
                    "Nombre": "Coromoro_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11272",
                    "Nombre": "Corozal_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10557",
                    "Nombre": "Corrales_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10813",
                    "Nombre": "Cota_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10773",
                    "Nombre": "Cotorra_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10558",
                    "Nombre": "Covarachia_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11273",
                    "Nombre": "Coveñas_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "11306",
                    "Nombre": "Coyaima_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11385",
                    "Nombre": "Cravo norte_Arauca",
                    "DepartamentoID": "10330"
                }
            },
            {
                "attributes": {
                    "Codigo": "11063",
                    "Nombre": "Cuaspud_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10559",
                    "Nombre": "Cubara_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11027",
                    "Nombre": "Cubarral_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10560",
                    "Nombre": "Cucaita_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10814",
                    "Nombre": "Cucunuba_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11115",
                    "Nombre": "Cucuta_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11125",
                    "Nombre": "Cucutilla_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10561",
                    "Nombre": "Cuitiva_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11028",
                    "Nombre": "Cumaral_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11457",
                    "Nombre": "Cumaribo_Vichada",
                    "DepartamentoID": "10338"
                }
            },
            {
                "attributes": {
                    "Codigo": "11064",
                    "Nombre": "Cumbal_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11065",
                    "Nombre": "Cumbitara_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11307",
                    "Nombre": "Cunday_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10687",
                    "Nombre": "Curillo_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "11205",
                    "Nombre": "Curiti_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10748",
                    "Nombre": "Curumaní_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10380",
                    "Nombre": "Dabeiba_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11354",
                    "Nombre": "Dagua_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10980",
                    "Nombre": "Dibulla_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "10981",
                    "Nombre": "Distracción_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "11308",
                    "Nombre": "Dolores_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10381",
                    "Nombre": "Don matias_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11171",
                    "Nombre": "Dosquebradas_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "10564",
                    "Nombre": "Duitama_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11126",
                    "Nombre": "Durania_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10382",
                    "Nombre": "Ebejico_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11355",
                    "Nombre": "El aguila_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10383",
                    "Nombre": "El bagre_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11000",
                    "Nombre": "El banco_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11356",
                    "Nombre": "El cairo_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11029",
                    "Nombre": "El calvario_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10918",
                    "Nombre": "El cantón del san pablo_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10922",
                    "Nombre": "El carmen de atrato_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10500",
                    "Nombre": "El carmen de bolivar_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11206",
                    "Nombre": "El carmen de chucuri_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10371",
                    "Nombre": "El carmen de viboral_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11127",
                    "Nombre": "El carmen_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11030",
                    "Nombre": "El castillo_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11357",
                    "Nombre": "El Cerrito_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11067",
                    "Nombre": "El charco_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10565",
                    "Nombre": "El cocuy_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10815",
                    "Nombre": "El colegio_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10749",
                    "Nombre": "El copey_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10688",
                    "Nombre": "El doncello_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "11031",
                    "Nombre": "El dorado_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11358",
                    "Nombre": "El dovio_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11425",
                    "Nombre": "El encanto_Amazonas",
                    "DepartamentoID": "10334"
                }
            },
            {
                "attributes": {
                    "Codigo": "10566",
                    "Nombre": "El espino_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11207",
                    "Nombre": "El guacamayo_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10501",
                    "Nombre": "El guamo_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10923",
                    "Nombre": "El litoral del san juan_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10982",
                    "Nombre": "El molino_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "10750",
                    "Nombre": "El paso_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10689",
                    "Nombre": "El paujil_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "11068",
                    "Nombre": "El Peñol_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10502",
                    "Nombre": "El Peñón_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10816",
                    "Nombre": "El Peñón_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11208",
                    "Nombre": "El Peñón_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11001",
                    "Nombre": "El piñón_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11209",
                    "Nombre": "El playón_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11002",
                    "Nombre": "El reten_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11446",
                    "Nombre": "El retorno_Guaviare",
                    "DepartamentoID": "10336"
                }
            },
            {
                "attributes": {
                    "Codigo": "11275",
                    "Nombre": "El roble_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10817",
                    "Nombre": "El rosal_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11069",
                    "Nombre": "El rosario_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10442",
                    "Nombre": "El santuario_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11070",
                    "Nombre": "El Tablón de Gómez_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10709",
                    "Nombre": "El tambo_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11071",
                    "Nombre": "El tambo_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11128",
                    "Nombre": "El tarra_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11129",
                    "Nombre": "El zulia_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10949",
                    "Nombre": "Elías_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11210",
                    "Nombre": "Encino_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11211",
                    "Nombre": "Enciso_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10384",
                    "Nombre": "Entrerrios_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10385",
                    "Nombre": "Envigado_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11309",
                    "Nombre": "Espinal_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10818",
                    "Nombre": "Facatativa_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11310",
                    "Nombre": "Falan_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10662",
                    "Nombre": "Filadelfia_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11160",
                    "Nombre": "Filandia_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "10567",
                    "Nombre": "Firavitoba_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11311",
                    "Nombre": "Flandes_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10683",
                    "Nombre": "Florencia_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "10710",
                    "Nombre": "Florencia_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10568",
                    "Nombre": "Floresta_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11212",
                    "Nombre": "Florian_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11359",
                    "Nombre": "Florida_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11213",
                    "Nombre": "Floridablanca_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10819",
                    "Nombre": "Fomeque_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10983",
                    "Nombre": "Fonseca_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "11386",
                    "Nombre": "Fortul_Arauca",
                    "DepartamentoID": "10330"
                }
            },
            {
                "attributes": {
                    "Codigo": "10820",
                    "Nombre": "Fosca_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11093",
                    "Nombre": "Francisco pizarro_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10386",
                    "Nombre": "Fredonia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11312",
                    "Nombre": "Fresno_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10387",
                    "Nombre": "Frontino_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11032",
                    "Nombre": "Fuente de oro_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11003",
                    "Nombre": "Fundación_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11072",
                    "Nombre": "Funes_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10821",
                    "Nombre": "Funza_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10822",
                    "Nombre": "Fuquene_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10823",
                    "Nombre": "Fusagasuga_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10824",
                    "Nombre": "Gachala_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10825",
                    "Nombre": "Gachancipa_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10569",
                    "Nombre": "Gachantiva_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10826",
                    "Nombre": "Gacheta_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11214",
                    "Nombre": "Galan_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10468",
                    "Nombre": "Galapa_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "11276",
                    "Nombre": "Galeras_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10827",
                    "Nombre": "Gama_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10751",
                    "Nombre": "Gamarra_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "11215",
                    "Nombre": "Gambita_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10570",
                    "Nombre": "Gameza_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10571",
                    "Nombre": "Garagoa_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10950",
                    "Nombre": "Garzón_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11161",
                    "Nombre": "Genova_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "10951",
                    "Nombre": "Gigante_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11360",
                    "Nombre": "Ginebra_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10388",
                    "Nombre": "Giraldo_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10828",
                    "Nombre": "Girardot_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10389",
                    "Nombre": "Girardota_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11216",
                    "Nombre": "Giron_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10390",
                    "Nombre": "Gómez plata_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10752",
                    "Nombre": "González_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "11130",
                    "Nombre": "Gramalote_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10391",
                    "Nombre": "Granada_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10829",
                    "Nombre": "Granada_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11033",
                    "Nombre": "Granada_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11217",
                    "Nombre": "Guaca_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10572",
                    "Nombre": "Guacamayas_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11361",
                    "Nombre": "Guacari_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11458",
                    "Nombre": "Guachene_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10830",
                    "Nombre": "Guacheta_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11073",
                    "Nombre": "Guachucal_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11348",
                    "Nombre": "Guadalajara de buga_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10392",
                    "Nombre": "Guadalupe_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11440",
                    "Nombre": "Guadalupe_Guainia",
                    "DepartamentoID": "10335"
                }
            },
            {
                "attributes": {
                    "Codigo": "10952",
                    "Nombre": "Guadalupe_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11218",
                    "Nombre": "Guadalupe_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10831",
                    "Nombre": "Guaduas_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11074",
                    "Nombre": "Guaitarilla_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11075",
                    "Nombre": "Gualmatán_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11004",
                    "Nombre": "Guamal_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11034",
                    "Nombre": "Guamal_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11313",
                    "Nombre": "Guamo_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10711",
                    "Nombre": "Guapi_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11219",
                    "Nombre": "Guapota_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11277",
                    "Nombre": "Guaranda_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10393",
                    "Nombre": "Guarne_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10832",
                    "Nombre": "Guasca_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10394",
                    "Nombre": "Guatape_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10833",
                    "Nombre": "Guataqui_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10834",
                    "Nombre": "Guatavita_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10573",
                    "Nombre": "Guateque_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11172",
                    "Nombre": "Guática_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "11220",
                    "Nombre": "Guavata_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10835",
                    "Nombre": "Guayabal de siquima_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10836",
                    "Nombre": "Guayabetal_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10574",
                    "Nombre": "Guayata_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11221",
                    "Nombre": "Güepsa_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10575",
                    "Nombre": "Güican_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10837",
                    "Nombre": "Gutierrez_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11131",
                    "Nombre": "Hacarí_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10503",
                    "Nombre": "Hatillo de loba_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11393",
                    "Nombre": "Hato corozal_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "11222",
                    "Nombre": "Hato_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10984",
                    "Nombre": "Hatonuevo_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "10395",
                    "Nombre": "Heliconia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11132",
                    "Nombre": "Herrán_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11314",
                    "Nombre": "Herveo_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10396",
                    "Nombre": "Hispania_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10953",
                    "Nombre": "Hobo_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11315",
                    "Nombre": "Honda_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11294",
                    "Nombre": "Ibagué_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11316",
                    "Nombre": "Icononzo_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11076",
                    "Nombre": "Iles_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11077",
                    "Nombre": "Imués_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11435",
                    "Nombre": "Inírida_Guainia",
                    "DepartamentoID": "10335"
                }
            },
            {
                "attributes": {
                    "Codigo": "10712",
                    "Nombre": "Inzá_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11078",
                    "Nombre": "Ipiales_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10954",
                    "Nombre": "Iquira_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10955",
                    "Nombre": "Isnos_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10924",
                    "Nombre": "Istmina_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10397",
                    "Nombre": "Itagüi_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10398",
                    "Nombre": "Ituango_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10576",
                    "Nombre": "Iza_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10713",
                    "Nombre": "Jambaló_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11362",
                    "Nombre": "Jamundí_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10399",
                    "Nombre": "Jardín_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10577",
                    "Nombre": "Jenesano_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10400",
                    "Nombre": "Jericó_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10578",
                    "Nombre": "Jericó_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10838",
                    "Nombre": "Jerusalen_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11223",
                    "Nombre": "Jesus maria_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11224",
                    "Nombre": "Jordan_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10469",
                    "Nombre": "Juan de acosta_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10839",
                    "Nombre": "Junin_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10925",
                    "Nombre": "Juradó_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10774",
                    "Nombre": "La apartada_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10956",
                    "Nombre": "La argentina_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11225",
                    "Nombre": "La belleza_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10840",
                    "Nombre": "La calera_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10580",
                    "Nombre": "La capilla_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10401",
                    "Nombre": "La ceja_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11173",
                    "Nombre": "La celia_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "11426",
                    "Nombre": "La chorrera_Amazonas",
                    "DepartamentoID": "10334"
                }
            },
            {
                "attributes": {
                    "Codigo": "11079",
                    "Nombre": "La cruz_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11363",
                    "Nombre": "La cumbre_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10663",
                    "Nombre": "La dorada_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11134",
                    "Nombre": "La esperanza_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10402",
                    "Nombre": "La estrella_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11080",
                    "Nombre": "La florida_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10753",
                    "Nombre": "La gloria_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10754",
                    "Nombre": "La jagua de ibirico_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10985",
                    "Nombre": "La jagua del pilar_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "11081",
                    "Nombre": "La llanada_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11037",
                    "Nombre": "La macarena_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10664",
                    "Nombre": "La merced_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10841",
                    "Nombre": "La mesa_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10690",
                    "Nombre": "La montañita_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "10842",
                    "Nombre": "La palma_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10760",
                    "Nombre": "La paz_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "11227",
                    "Nombre": "La paz_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11427",
                    "Nombre": "La pedrera_Amazonas",
                    "DepartamentoID": "10334"
                }
            },
            {
                "attributes": {
                    "Codigo": "10843",
                    "Nombre": "La peña_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10403",
                    "Nombre": "La pintada_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10957",
                    "Nombre": "La plata_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11135",
                    "Nombre": "La playa_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11455",
                    "Nombre": "La primavera_Vichada",
                    "DepartamentoID": "10338"
                }
            },
            {
                "attributes": {
                    "Codigo": "11394",
                    "Nombre": "La salina_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "10714",
                    "Nombre": "La sierra_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11162",
                    "Nombre": "La tebaida_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "11082",
                    "Nombre": "La tola_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10404",
                    "Nombre": "La Unión_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11083",
                    "Nombre": "La Unión_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11278",
                    "Nombre": "La Unión_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "11364",
                    "Nombre": "La Unión_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10582",
                    "Nombre": "La uvita_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10715",
                    "Nombre": "La vega_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10844",
                    "Nombre": "La vega_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11428",
                    "Nombre": "La Victoria_Amazonas",
                    "DepartamentoID": "10334"
                }
            },
            {
                "attributes": {
                    "Codigo": "10581",
                    "Nombre": "La victoria_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11365",
                    "Nombre": "La victoria_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11174",
                    "Nombre": "La virginia_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "11133",
                    "Nombre": "Labateca_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10579",
                    "Nombre": "Labranzagrande_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11226",
                    "Nombre": "Landázuri_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11228",
                    "Nombre": "Lebrija_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11415",
                    "Nombre": "Leguizamo_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "11084",
                    "Nombre": "Leiva_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11039",
                    "Nombre": "Lejanias_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10845",
                    "Nombre": "Lenguazaque_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11317",
                    "Nombre": "Lérida_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11424",
                    "Nombre": "Leticia_Amazonas",
                    "DepartamentoID": "10334"
                }
            },
            {
                "attributes": {
                    "Codigo": "11318",
                    "Nombre": "Líbano_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10405",
                    "Nombre": "Liborina_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11085",
                    "Nombre": "Linares_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10926",
                    "Nombre": "Lloró_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10716",
                    "Nombre": "López_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10775",
                    "Nombre": "Lorica_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11086",
                    "Nombre": "Los andes_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10776",
                    "Nombre": "Los cordobas_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11279",
                    "Nombre": "Los palmitos_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "11136",
                    "Nombre": "Los patios_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11229",
                    "Nombre": "Los santos_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11137",
                    "Nombre": "Lourdes_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10470",
                    "Nombre": "Luruaco_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10584",
                    "Nombre": "Macanal_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11230",
                    "Nombre": "Macaravita_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10406",
                    "Nombre": "Maceo_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10846",
                    "Nombre": "Macheta_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10847",
                    "Nombre": "Madrid_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10504",
                    "Nombre": "Magangué_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11087",
                    "Nombre": "Magüi_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10505",
                    "Nombre": "Mahates_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10986",
                    "Nombre": "Maicao_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "11280",
                    "Nombre": "Majagual_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "11231",
                    "Nombre": "Malaga_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10471",
                    "Nombre": "Malambo_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "11088",
                    "Nombre": "Mallama_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10472",
                    "Nombre": "Manatí_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10755",
                    "Nombre": "Manaure_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10987",
                    "Nombre": "Manaure_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "11395",
                    "Nombre": "Maní_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "10656",
                    "Nombre": "Manizales_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10848",
                    "Nombre": "Manta_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10665",
                    "Nombre": "Manzanares_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11035",
                    "Nombre": "Mapiripan_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11437",
                    "Nombre": "Mapiripana_Guainia",
                    "DepartamentoID": "10335"
                }
            },
            {
                "attributes": {
                    "Codigo": "10506",
                    "Nombre": "Margarita_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10507",
                    "Nombre": "Maria la baja_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10407",
                    "Nombre": "Marinilla_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10585",
                    "Nombre": "Maripi_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11319",
                    "Nombre": "Mariquita_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10666",
                    "Nombre": "Marmato_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10667",
                    "Nombre": "Marquetalia_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11175",
                    "Nombre": "Marsella_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "10668",
                    "Nombre": "Marulanda_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11232",
                    "Nombre": "Matanza_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10339",
                    "Nombre": "Medellín_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10849",
                    "Nombre": "Medina_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10927",
                    "Nombre": "Medio atrato_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10928",
                    "Nombre": "Medio baudo_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10929",
                    "Nombre": "Medio san juan_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "11320",
                    "Nombre": "Melgar_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10717",
                    "Nombre": "Mercaderes_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11036",
                    "Nombre": "Mesetas_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10691",
                    "Nombre": "Milán_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "10586",
                    "Nombre": "Miraflores_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11447",
                    "Nombre": "Miraflores_Guaviare",
                    "DepartamentoID": "10336"
                }
            },
            {
                "attributes": {
                    "Codigo": "10718",
                    "Nombre": "Miranda_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11429",
                    "Nombre": "Miriti - Paraná_Amazonas",
                    "DepartamentoID": "10334"
                }
            },
            {
                "attributes": {
                    "Codigo": "11176",
                    "Nombre": "Mistrató_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "11448",
                    "Nombre": "Mitu_Vaupes",
                    "DepartamentoID": "10337"
                }
            },
            {
                "attributes": {
                    "Codigo": "11409",
                    "Nombre": "Mocoa_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "11233",
                    "Nombre": "Mogotes_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11234",
                    "Nombre": "Molagavita_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10777",
                    "Nombre": "Momil_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10509",
                    "Nombre": "Mompos_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10587",
                    "Nombre": "Mongua_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10588",
                    "Nombre": "Mongui_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10589",
                    "Nombre": "Moniquira_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10408",
                    "Nombre": "Montebello_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10508",
                    "Nombre": "Montecristo_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10778",
                    "Nombre": "Montelibano_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11163",
                    "Nombre": "Montenegro_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "10765",
                    "Nombre": "Monteria_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11396",
                    "Nombre": "Monterrey_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "10779",
                    "Nombre": "Moñitos_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10510",
                    "Nombre": "Morales_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10719",
                    "Nombre": "Morales_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10692",
                    "Nombre": "Morelia_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "11443",
                    "Nombre": "Morichal_Guainia",
                    "DepartamentoID": "10335"
                }
            },
            {
                "attributes": {
                    "Codigo": "11281",
                    "Nombre": "Morroa_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10850",
                    "Nombre": "Mosquera_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11089",
                    "Nombre": "Mosquera_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10590",
                    "Nombre": "Motavita_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11321",
                    "Nombre": "Murillo_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10409",
                    "Nombre": "Murindó_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10410",
                    "Nombre": "Mutatá_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11138",
                    "Nombre": "Mutiscua_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10591",
                    "Nombre": "Muzo_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10411",
                    "Nombre": "Nariño_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10851",
                    "Nombre": "Nariño_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11090",
                    "Nombre": "Nariño_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10958",
                    "Nombre": "Nátaga_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11322",
                    "Nombre": "Natagaima_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10413",
                    "Nombre": "Nechi_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10412",
                    "Nombre": "Necoclí_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10669",
                    "Nombre": "Neira_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10940",
                    "Nombre": "Neiva_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10852",
                    "Nombre": "Nemocon_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10853",
                    "Nombre": "Nilo_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10854",
                    "Nombre": "Nimaima_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10592",
                    "Nombre": "Nobsa_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10855",
                    "Nombre": "Nocaima_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10670",
                    "Nombre": "Norcasia_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11461",
                    "Nombre": "Norosí_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10930",
                    "Nombre": "Novita_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "11005",
                    "Nombre": "Nueva granada_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10593",
                    "Nombre": "Nuevo colon_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11397",
                    "Nombre": "Nunchía_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "10931",
                    "Nombre": "Nuquí_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "11366",
                    "Nombre": "Obando_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11235",
                    "Nombre": "Ocamonte_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11139",
                    "Nombre": "Ocaña_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11236",
                    "Nombre": "Oiba_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10594",
                    "Nombre": "Oicata_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11091",
                    "Nombre": "Olaya herrera_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10414",
                    "Nombre": "Olaya_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11237",
                    "Nombre": "Onzaga_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10959",
                    "Nombre": "Oporapa_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11411",
                    "Nombre": "Orito_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "11398",
                    "Nombre": "Orocué_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "11323",
                    "Nombre": "Ortega_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11092",
                    "Nombre": "Ospina_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10595",
                    "Nombre": "Otanche_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11282",
                    "Nombre": "Ovejas_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10596",
                    "Nombre": "Pachavita_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10857",
                    "Nombre": "Pacho_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11450",
                    "Nombre": "Pacoa_Vaupes",
                    "DepartamentoID": "10337"
                }
            },
            {
                "attributes": {
                    "Codigo": "10671",
                    "Nombre": "Pacora_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10720",
                    "Nombre": "Padilla_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10597",
                    "Nombre": "Paez_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10721",
                    "Nombre": "Paez_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10960",
                    "Nombre": "Paicol_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10756",
                    "Nombre": "Pailitas_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10858",
                    "Nombre": "Paime_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10598",
                    "Nombre": "Paipa_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10599",
                    "Nombre": "Pajarito_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10961",
                    "Nombre": "Palermo_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10672",
                    "Nombre": "Palestina_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10962",
                    "Nombre": "Palestina_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10473",
                    "Nombre": "Palmar de varela_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "11238",
                    "Nombre": "Palmar_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11239",
                    "Nombre": "Palmas del socorro_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11367",
                    "Nombre": "Palmira_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11283",
                    "Nombre": "Palmito_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "11324",
                    "Nombre": "Palocabildo_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11140",
                    "Nombre": "Pamplona_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11141",
                    "Nombre": "Pamplonita_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11442",
                    "Nombre": "Pana Pana_Guainia",
                    "DepartamentoID": "10335"
                }
            },
            {
                "attributes": {
                    "Codigo": "10859",
                    "Nombre": "Pandi_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10600",
                    "Nombre": "Panqueba_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11452",
                    "Nombre": "Papunaua_Vaupes",
                    "DepartamentoID": "10337"
                }
            },
            {
                "attributes": {
                    "Codigo": "11240",
                    "Nombre": "Paramo_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10860",
                    "Nombre": "Paratebueno_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10861",
                    "Nombre": "Pasca_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11051",
                    "Nombre": "Pasto_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10722",
                    "Nombre": "Patia_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10601",
                    "Nombre": "Pauna_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10602",
                    "Nombre": "Paya_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11399",
                    "Nombre": "Paz de ariporo_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "10603",
                    "Nombre": "Paz de rio_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11006",
                    "Nombre": "Pedraza_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10757",
                    "Nombre": "Pelaya_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10673",
                    "Nombre": "Pensilvania_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10415",
                    "Nombre": "Peñol_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10416",
                    "Nombre": "Peque_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11167",
                    "Nombre": "Pereira_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "10604",
                    "Nombre": "Pesca_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10723",
                    "Nombre": "Piamonte_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11241",
                    "Nombre": "Piedecuesta_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11325",
                    "Nombre": "Piedras_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10724",
                    "Nombre": "Piendamó_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11164",
                    "Nombre": "Pijao_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "11007",
                    "Nombre": "Pijiño del carmen_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11242",
                    "Nombre": "Pinchote_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10511",
                    "Nombre": "Pinillos_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10474",
                    "Nombre": "Piojo_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10605",
                    "Nombre": "Pisba_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10963",
                    "Nombre": "Pital_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10964",
                    "Nombre": "Pitalito_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11008",
                    "Nombre": "Pivijay_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11326",
                    "Nombre": "Planadas_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10780",
                    "Nombre": "Planeta rica_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11009",
                    "Nombre": "Plato_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11094",
                    "Nombre": "Policarpa_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10475",
                    "Nombre": "Polonuevo_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10476",
                    "Nombre": "Ponedera_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10699",
                    "Nombre": "Popayan_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11400",
                    "Nombre": "Pore_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "11095",
                    "Nombre": "Potosi_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11368",
                    "Nombre": "Pradera_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11327",
                    "Nombre": "Prado_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11096",
                    "Nombre": "Providencia_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11423",
                    "Nombre": "Providencia_San Andres y Providencia",
                    "DepartamentoID": "10333"
                }
            },
            {
                "attributes": {
                    "Codigo": "10758",
                    "Nombre": "Pueblo bello_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10781",
                    "Nombre": "Pueblo nuevo_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11177",
                    "Nombre": "Pueblo rico_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "10417",
                    "Nombre": "Pueblorrico_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11010",
                    "Nombre": "Puebloviejo_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11243",
                    "Nombre": "Puente nacional_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11097",
                    "Nombre": "Puerres_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11430",
                    "Nombre": "Puerto alegría_Amazonas",
                    "DepartamentoID": "10334"
                }
            },
            {
                "attributes": {
                    "Codigo": "11431",
                    "Nombre": "Puerto arica_Amazonas",
                    "DepartamentoID": "10334"
                }
            },
            {
                "attributes": {
                    "Codigo": "11412",
                    "Nombre": "Puerto asis_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "10418",
                    "Nombre": "Puerto berrio_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10606",
                    "Nombre": "Puerto boyaca_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11413",
                    "Nombre": "Puerto caicedo_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "11454",
                    "Nombre": "Puerto carreño_Vichada",
                    "DepartamentoID": "10338"
                }
            },
            {
                "attributes": {
                    "Codigo": "10477",
                    "Nombre": "Puerto colombia_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "11439",
                    "Nombre": "Puerto Colombia_Guainia",
                    "DepartamentoID": "10335"
                }
            },
            {
                "attributes": {
                    "Codigo": "11040",
                    "Nombre": "Puerto concordia_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10782",
                    "Nombre": "Puerto escondido_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11041",
                    "Nombre": "Puerto gaitan_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11414",
                    "Nombre": "Puerto guzmán_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "10783",
                    "Nombre": "Puerto libertador_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11043",
                    "Nombre": "Puerto lleras_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11042",
                    "Nombre": "Puerto lópez_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10419",
                    "Nombre": "Puerto nare_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11432",
                    "Nombre": "Puerto nariño_Amazonas",
                    "DepartamentoID": "10334"
                }
            },
            {
                "attributes": {
                    "Codigo": "11244",
                    "Nombre": "Puerto parra_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10693",
                    "Nombre": "Puerto rico_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "11044",
                    "Nombre": "Puerto rico_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11387",
                    "Nombre": "Puerto rondon_Arauca",
                    "DepartamentoID": "10330"
                }
            },
            {
                "attributes": {
                    "Codigo": "10862",
                    "Nombre": "Puerto salgar_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11433",
                    "Nombre": "Puerto santander_Amazonas",
                    "DepartamentoID": "10334"
                }
            },
            {
                "attributes": {
                    "Codigo": "11142",
                    "Nombre": "Puerto santander_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10725",
                    "Nombre": "Puerto tejada_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10420",
                    "Nombre": "Puerto triunfo_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11245",
                    "Nombre": "Puerto wilches_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10863",
                    "Nombre": "Puli_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11098",
                    "Nombre": "Pupiales_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10726",
                    "Nombre": "Puracé_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11328",
                    "Nombre": "Purificación_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10784",
                    "Nombre": "Purisima_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10864",
                    "Nombre": "Quebradanegra_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10865",
                    "Nombre": "Quetame_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10909",
                    "Nombre": "Quibdó_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "11165",
                    "Nombre": "Quimbaya_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "11178",
                    "Nombre": "Quinchía_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "10607",
                    "Nombre": "Quipama_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10866",
                    "Nombre": "Quipile_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11143",
                    "Nombre": "Ragonvalia_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10608",
                    "Nombre": "Ramiriqui_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10609",
                    "Nombre": "Raquira_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11401",
                    "Nombre": "Recetor_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "10512",
                    "Nombre": "Regidor_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10421",
                    "Nombre": "Remedios_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11011",
                    "Nombre": "Remolino_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10478",
                    "Nombre": "Repelón_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "11045",
                    "Nombre": "Restrepo_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11369",
                    "Nombre": "Restrepo_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10422",
                    "Nombre": "Retiro_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10868",
                    "Nombre": "Ricaurte_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11099",
                    "Nombre": "Ricaurte_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10759",
                    "Nombre": "Río de oro_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10932",
                    "Nombre": "Río iro_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10933",
                    "Nombre": "Río quito_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10513",
                    "Nombre": "Río viejo_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11329",
                    "Nombre": "Rioblanco_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11370",
                    "Nombre": "Riofrío_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10977",
                    "Nombre": "Riohacha_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "10423",
                    "Nombre": "Rionegro_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11246",
                    "Nombre": "Rionegro_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10674",
                    "Nombre": "Riosucio_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10934",
                    "Nombre": "Riosucio_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10675",
                    "Nombre": "Risaralda_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10965",
                    "Nombre": "Rivera_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "11100",
                    "Nombre": "Roberto payan_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11371",
                    "Nombre": "Roldanillo_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11330",
                    "Nombre": "Roncesvalles_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10610",
                    "Nombre": "Rondon_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10727",
                    "Nombre": "Rosas_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11331",
                    "Nombre": "Rovira_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11247",
                    "Nombre": "Sabana de torres_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10479",
                    "Nombre": "Sabanagrande_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10424",
                    "Nombre": "Sabanalarga_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10480",
                    "Nombre": "Sabanalarga_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "11402",
                    "Nombre": "Sabanalarga_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "11012",
                    "Nombre": "Sabanas de san angel_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10425",
                    "Nombre": "Sabaneta_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10611",
                    "Nombre": "Saboya_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11403",
                    "Nombre": "Sácama_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "10612",
                    "Nombre": "Sachica_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10785",
                    "Nombre": "Sahagún_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10966",
                    "Nombre": "Saladoblanco_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10676",
                    "Nombre": "Salamina_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11013",
                    "Nombre": "Salamina_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11144",
                    "Nombre": "Salazar_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11332",
                    "Nombre": "Saldaña_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11166",
                    "Nombre": "Salento_Quindio",
                    "DepartamentoID": "10324"
                }
            },
            {
                "attributes": {
                    "Codigo": "10426",
                    "Nombre": "Salgar_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10613",
                    "Nombre": "Samaca_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10677",
                    "Nombre": "Samaná_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11101",
                    "Nombre": "Samaniego_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11284",
                    "Nombre": "Sampues_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10967",
                    "Nombre": "San agustín_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10761",
                    "Nombre": "San alberto_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10427",
                    "Nombre": "San andres de cuerquia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11112",
                    "Nombre": "San andres de tumaco_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10786",
                    "Nombre": "San andres sotavento_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11422",
                    "Nombre": "San andres_San Andres y Providencia",
                    "DepartamentoID": "10333"
                }
            },
            {
                "attributes": {
                    "Codigo": "11248",
                    "Nombre": "San andres_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10787",
                    "Nombre": "San antero_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10869",
                    "Nombre": "San antonio del tequendama_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11333",
                    "Nombre": "San antonio_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11285",
                    "Nombre": "San benito abad_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "11249",
                    "Nombre": "San benito_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10788",
                    "Nombre": "San bernardo del viento_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10870",
                    "Nombre": "San bernardo_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11103",
                    "Nombre": "San bernardo_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11145",
                    "Nombre": "San calixto_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11046",
                    "Nombre": "San carlos de guaroa_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10428",
                    "Nombre": "San carlos_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10789",
                    "Nombre": "San carlos_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10871",
                    "Nombre": "San cayetano_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11146",
                    "Nombre": "San cayetano_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10514",
                    "Nombre": "San cristobal_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10762",
                    "Nombre": "San diego_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10614",
                    "Nombre": "San eduardo_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10515",
                    "Nombre": "San estanislao_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11438",
                    "Nombre": "San felipe_Guainia",
                    "DepartamentoID": "10335"
                }
            },
            {
                "attributes": {
                    "Codigo": "10516",
                    "Nombre": "San fernando_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10429",
                    "Nombre": "San francisco_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10872",
                    "Nombre": "San francisco_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11417",
                    "Nombre": "San francisco_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "11250",
                    "Nombre": "San gil_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10518",
                    "Nombre": "San jacinto del cauca_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10517",
                    "Nombre": "San jacinto_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10430",
                    "Nombre": "San jeronimo_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11251",
                    "Nombre": "San joaquin_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11052",
                    "Nombre": "San José de Albán_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10431",
                    "Nombre": "San jose de la montaña_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11252",
                    "Nombre": "San jose de miranda_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10615",
                    "Nombre": "San jose de pare_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11459",
                    "Nombre": "San josé de uré_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10694",
                    "Nombre": "San jose del fragua_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "11444",
                    "Nombre": "San jose del guaviare_Guaviare",
                    "DepartamentoID": "10336"
                }
            },
            {
                "attributes": {
                    "Codigo": "10935",
                    "Nombre": "San jose del palmar_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10678",
                    "Nombre": "San jose_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11047",
                    "Nombre": "San juan de arama_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11286",
                    "Nombre": "San juan de betulia_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10873",
                    "Nombre": "San juan de rio seco_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10432",
                    "Nombre": "San juan de uraba_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10988",
                    "Nombre": "San juan del cesar_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "10519",
                    "Nombre": "San juan nepomuceno_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11048",
                    "Nombre": "San juanito_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "11104",
                    "Nombre": "San lorenzo_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10616",
                    "Nombre": "San luis de gaceno_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11404",
                    "Nombre": "San luis de palenque_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "11290",
                    "Nombre": "San luis de since_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10433",
                    "Nombre": "San luis_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11334",
                    "Nombre": "San luis_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11287",
                    "Nombre": "San marcos_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10520",
                    "Nombre": "San martin de loba_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10763",
                    "Nombre": "San martin_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "11049",
                    "Nombre": "San martin_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10617",
                    "Nombre": "San mateo_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10618",
                    "Nombre": "San miguel de sema_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11418",
                    "Nombre": "San miguel_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "11253",
                    "Nombre": "San miguel_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11288",
                    "Nombre": "San onofre_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10619",
                    "Nombre": "San pablo de borbur_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10521",
                    "Nombre": "San pablo_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11105",
                    "Nombre": "San pablo_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11106",
                    "Nombre": "San pedro de cartago_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10434",
                    "Nombre": "San pedro de los milagros_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10435",
                    "Nombre": "San pedro de uraba_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11289",
                    "Nombre": "San pedro_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "11372",
                    "Nombre": "San pedro_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10790",
                    "Nombre": "San pelayo_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10436",
                    "Nombre": "San rafael_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10437",
                    "Nombre": "San roque_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11014",
                    "Nombre": "San sebastian de buenavista_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10728",
                    "Nombre": "San sebastian_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11254",
                    "Nombre": "San vicente de chucuri_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10695",
                    "Nombre": "San vicente del caguan_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "10438",
                    "Nombre": "San vicente_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11015",
                    "Nombre": "San zenón_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11102",
                    "Nombre": "Sandoná_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11016",
                    "Nombre": "Santa ana_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11017",
                    "Nombre": "Santa bárbara de pinto_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10439",
                    "Nombre": "Santa bárbara_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11107",
                    "Nombre": "Santa bárbara_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11255",
                    "Nombre": "Santa bárbara_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10522",
                    "Nombre": "Santa catalina_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11256",
                    "Nombre": "Santa helena del Opón_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11335",
                    "Nombre": "Santa isabel_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10481",
                    "Nombre": "Santa lucia_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10621",
                    "Nombre": "Santa maria_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10968",
                    "Nombre": "Santa maria_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10992",
                    "Nombre": "Santa marta_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "11179",
                    "Nombre": "Santa rosa de cabal_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "10440",
                    "Nombre": "Santa rosa de osos_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10622",
                    "Nombre": "Santa rosa de viterbo_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10524",
                    "Nombre": "Santa rosa del sur_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10523",
                    "Nombre": "Santa rosa_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10730",
                    "Nombre": "Santa rosa_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11456",
                    "Nombre": "Santa rosalia_Vichada",
                    "DepartamentoID": "10338"
                }
            },
            {
                "attributes": {
                    "Codigo": "10623",
                    "Nombre": "Santa sofia_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11108",
                    "Nombre": "Santacruz_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10349",
                    "Nombre": "Santafé de antioquia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10620",
                    "Nombre": "Santana_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10729",
                    "Nombre": "Santander de quilichao_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11292",
                    "Nombre": "Santiago de tolú_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "11147",
                    "Nombre": "Santiago_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11419",
                    "Nombre": "Santiago_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "10441",
                    "Nombre": "Santo domingo_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10482",
                    "Nombre": "Santo tomas_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "11180",
                    "Nombre": "Santuario_Risaralda",
                    "DepartamentoID": "10325"
                }
            },
            {
                "attributes": {
                    "Codigo": "11109",
                    "Nombre": "Sapuyes_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11388",
                    "Nombre": "Saravena_Arauca",
                    "DepartamentoID": "10330"
                }
            },
            {
                "attributes": {
                    "Codigo": "11148",
                    "Nombre": "Sardinata_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10874",
                    "Nombre": "Sasaima_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10624",
                    "Nombre": "Sativanorte_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10625",
                    "Nombre": "Sativasur_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10443",
                    "Nombre": "Segovia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10875",
                    "Nombre": "Sesquile_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11373",
                    "Nombre": "Sevilla_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10626",
                    "Nombre": "Siachoque_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10876",
                    "Nombre": "Sibate_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11416",
                    "Nombre": "Sibundoy_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "11149",
                    "Nombre": "Silos_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10877",
                    "Nombre": "Silvania_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10731",
                    "Nombre": "Silvia_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11257",
                    "Nombre": "Simacota_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10878",
                    "Nombre": "Simijaca_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10525",
                    "Nombre": "Simiti_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11268",
                    "Nombre": "Sincelejo_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10936",
                    "Nombre": "Sipí_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "11018",
                    "Nombre": "Sitionuevo_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10879",
                    "Nombre": "Soacha_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10627",
                    "Nombre": "Soata_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10629",
                    "Nombre": "Socha_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11258",
                    "Nombre": "Socorro_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10628",
                    "Nombre": "Socota_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10630",
                    "Nombre": "Sogamoso_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10696",
                    "Nombre": "Solano_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "10483",
                    "Nombre": "Soledad_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10697",
                    "Nombre": "Solita_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "10631",
                    "Nombre": "Somondoco_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10444",
                    "Nombre": "Sonsón_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10445",
                    "Nombre": "Sopetrán_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10526",
                    "Nombre": "Soplaviento_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10880",
                    "Nombre": "Sopo_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10632",
                    "Nombre": "Sora_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10634",
                    "Nombre": "Soraca_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10633",
                    "Nombre": "Sotaquira_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10732",
                    "Nombre": "Sotará_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11259",
                    "Nombre": "Suaita_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10484",
                    "Nombre": "Suan_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10733",
                    "Nombre": "Suárez_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11336",
                    "Nombre": "Suárez_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10969",
                    "Nombre": "Suaza_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10881",
                    "Nombre": "Subachoque_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10734",
                    "Nombre": "Sucre_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11260",
                    "Nombre": "Sucre_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11291",
                    "Nombre": "Sucre_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "10882",
                    "Nombre": "Suesca_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10883",
                    "Nombre": "Supata_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10679",
                    "Nombre": "Supía_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "11261",
                    "Nombre": "Suratá_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10884",
                    "Nombre": "Susa_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10635",
                    "Nombre": "Susacon_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10636",
                    "Nombre": "Sutamarchan_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10885",
                    "Nombre": "Sutatausa_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10637",
                    "Nombre": "Sutatenza_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10886",
                    "Nombre": "Tabio_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10937",
                    "Nombre": "Tadó_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10527",
                    "Nombre": "Talaigua nuevo_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10764",
                    "Nombre": "Tamalameque_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "11405",
                    "Nombre": "Támara_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "11389",
                    "Nombre": "Tame_Arauca",
                    "DepartamentoID": "10330"
                }
            },
            {
                "attributes": {
                    "Codigo": "10446",
                    "Nombre": "Tamesis_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11110",
                    "Nombre": "Taminango_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11111",
                    "Nombre": "Tangua_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "11451",
                    "Nombre": "Taraira_Vaupes",
                    "DepartamentoID": "10337"
                }
            },
            {
                "attributes": {
                    "Codigo": "11434",
                    "Nombre": "Tarapacá_Amazonas",
                    "DepartamentoID": "10334"
                }
            },
            {
                "attributes": {
                    "Codigo": "10447",
                    "Nombre": "Tarazá_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10970",
                    "Nombre": "Tarqui_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10448",
                    "Nombre": "Tarso_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10638",
                    "Nombre": "Tasco_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11406",
                    "Nombre": "Tauramena_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "10887",
                    "Nombre": "Tausa_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10972",
                    "Nombre": "Tello_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10888",
                    "Nombre": "Tena_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11019",
                    "Nombre": "Tenerife_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10889",
                    "Nombre": "Tenjo_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10639",
                    "Nombre": "Tenza_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11150",
                    "Nombre": "Teorama_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10973",
                    "Nombre": "Teruel_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10971",
                    "Nombre": "Tesalia_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10890",
                    "Nombre": "Tibacuy_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10640",
                    "Nombre": "Tibana_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10641",
                    "Nombre": "Tibasosa_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10891",
                    "Nombre": "Tibirita_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11151",
                    "Nombre": "Tibú_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10791",
                    "Nombre": "Tierralta_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "10974",
                    "Nombre": "Timana_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10735",
                    "Nombre": "Timbío_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10736",
                    "Nombre": "Timbiquí_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "10642",
                    "Nombre": "Tinjaca_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10643",
                    "Nombre": "Tipacoque_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10528",
                    "Nombre": "Tiquisio_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10449",
                    "Nombre": "Titiribi_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10644",
                    "Nombre": "Toca_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10892",
                    "Nombre": "Tocaima_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10893",
                    "Nombre": "Tocancipa_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10645",
                    "Nombre": "Togüi_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10450",
                    "Nombre": "Toledo_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11152",
                    "Nombre": "Toledo_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "11293",
                    "Nombre": "Tolú viejo_Sucre",
                    "DepartamentoID": "10327"
                }
            },
            {
                "attributes": {
                    "Codigo": "11262",
                    "Nombre": "Tona_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10646",
                    "Nombre": "Topaga_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10894",
                    "Nombre": "Topaipi_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10737",
                    "Nombre": "Toribío_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11374",
                    "Nombre": "Toro_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10647",
                    "Nombre": "Tota_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10738",
                    "Nombre": "Totoró_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11407",
                    "Nombre": "Trinidad_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "11375",
                    "Nombre": "Trujillo_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10485",
                    "Nombre": "Tubara_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "11460",
                    "Nombre": "Tuchín_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11376",
                    "Nombre": "Tuluá_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10533",
                    "Nombre": "Tunja_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10648",
                    "Nombre": "Tunungua_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11113",
                    "Nombre": "Tuquerres_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10529",
                    "Nombre": "Turbaco_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10530",
                    "Nombre": "Turbana_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "10451",
                    "Nombre": "Turbo_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10649",
                    "Nombre": "Turmeque_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10650",
                    "Nombre": "Tuta_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10651",
                    "Nombre": "Tutaza_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10895",
                    "Nombre": "Ubala_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10896",
                    "Nombre": "Ubaque_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11377",
                    "Nombre": "Ulloa_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10652",
                    "Nombre": "Umbita_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10898",
                    "Nombre": "Une_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10938",
                    "Nombre": "Unguía_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10939",
                    "Nombre": "Unión panamericana_Choco",
                    "DepartamentoID": "10317"
                }
            },
            {
                "attributes": {
                    "Codigo": "10452",
                    "Nombre": "Uramita_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11038",
                    "Nombre": "Uribe_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10989",
                    "Nombre": "Uribia_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "10453",
                    "Nombre": "Urrao_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10990",
                    "Nombre": "Urumita_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "10486",
                    "Nombre": "Usiacurí_Atlantico",
                    "DepartamentoID": "10307"
                }
            },
            {
                "attributes": {
                    "Codigo": "10899",
                    "Nombre": "Utica_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10454",
                    "Nombre": "Valdivia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10792",
                    "Nombre": "Valencia_Cordoba",
                    "DepartamentoID": "10315"
                }
            },
            {
                "attributes": {
                    "Codigo": "11263",
                    "Nombre": "Valle de san josé_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11337",
                    "Nombre": "Valle de san juan_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11420",
                    "Nombre": "Valle del guamuez_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "10740",
                    "Nombre": "Valledupar_Cesar",
                    "DepartamentoID": "10314"
                }
            },
            {
                "attributes": {
                    "Codigo": "10455",
                    "Nombre": "Valparaiso_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10698",
                    "Nombre": "Valparaiso_Caqueta",
                    "DepartamentoID": "10312"
                }
            },
            {
                "attributes": {
                    "Codigo": "10456",
                    "Nombre": "Vegachi_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11264",
                    "Nombre": "Velez_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11338",
                    "Nombre": "Venadillo_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10457",
                    "Nombre": "Venecia_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10856",
                    "Nombre": "Venecia_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10653",
                    "Nombre": "Ventaquemada_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10900",
                    "Nombre": "Vergara_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11378",
                    "Nombre": "Versalles_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11265",
                    "Nombre": "Vetas_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10901",
                    "Nombre": "Viani_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10680",
                    "Nombre": "Victoria_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10458",
                    "Nombre": "Vigia del fuerte_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11379",
                    "Nombre": "Vijes_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11153",
                    "Nombre": "Villa caro_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10583",
                    "Nombre": "Villa de leyva_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10897",
                    "Nombre": "Villa de san diego de ubate_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11154",
                    "Nombre": "Villa del rosario_Norte de Santander",
                    "DepartamentoID": "10323"
                }
            },
            {
                "attributes": {
                    "Codigo": "10739",
                    "Nombre": "Villa rica_Cauca",
                    "DepartamentoID": "10313"
                }
            },
            {
                "attributes": {
                    "Codigo": "11421",
                    "Nombre": "Villagarzón_Putumayo",
                    "DepartamentoID": "10332"
                }
            },
            {
                "attributes": {
                    "Codigo": "10902",
                    "Nombre": "Villagomez_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11339",
                    "Nombre": "Villahermosa_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "10681",
                    "Nombre": "Villamaria_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10531",
                    "Nombre": "Villanueva_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11408",
                    "Nombre": "Villanueva_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "10991",
                    "Nombre": "Villanueva_La Guajira",
                    "DepartamentoID": "10319"
                }
            },
            {
                "attributes": {
                    "Codigo": "11266",
                    "Nombre": "Villanueva_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "10903",
                    "Nombre": "Villapinzon_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11340",
                    "Nombre": "Villarrica_Tolima",
                    "DepartamentoID": "10328"
                }
            },
            {
                "attributes": {
                    "Codigo": "11022",
                    "Nombre": "Villavicencio_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10975",
                    "Nombre": "Villavieja_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10904",
                    "Nombre": "Villeta_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10905",
                    "Nombre": "Viota_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10654",
                    "Nombre": "Viracacha_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "11050",
                    "Nombre": "Vistahermosa_Meta",
                    "DepartamentoID": "10321"
                }
            },
            {
                "attributes": {
                    "Codigo": "10682",
                    "Nombre": "Viterbo_Caldas",
                    "DepartamentoID": "10311"
                }
            },
            {
                "attributes": {
                    "Codigo": "10906",
                    "Nombre": "Yacopi_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11114",
                    "Nombre": "Yacuanquer_Nariño",
                    "DepartamentoID": "10322"
                }
            },
            {
                "attributes": {
                    "Codigo": "10976",
                    "Nombre": "Yaguara_Huila",
                    "DepartamentoID": "10318"
                }
            },
            {
                "attributes": {
                    "Codigo": "10459",
                    "Nombre": "Yali_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10460",
                    "Nombre": "Yarumal_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11453",
                    "Nombre": "Yavarate_Vaupes",
                    "DepartamentoID": "10337"
                }
            },
            {
                "attributes": {
                    "Codigo": "10461",
                    "Nombre": "Yolombó_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "10462",
                    "Nombre": "Yondó_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11390",
                    "Nombre": "Yopal_Casanare",
                    "DepartamentoID": "10331"
                }
            },
            {
                "attributes": {
                    "Codigo": "11380",
                    "Nombre": "Yotoco_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "11381",
                    "Nombre": "Yumbo_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10532",
                    "Nombre": "Zambrano_Bolivar",
                    "DepartamentoID": "10309"
                }
            },
            {
                "attributes": {
                    "Codigo": "11267",
                    "Nombre": "Zapatoca_Santander",
                    "DepartamentoID": "10326"
                }
            },
            {
                "attributes": {
                    "Codigo": "11020",
                    "Nombre": "Zapayán_Magdalena",
                    "DepartamentoID": "10320"
                }
            },
            {
                "attributes": {
                    "Codigo": "10463",
                    "Nombre": "Zaragoza_Antioquia",
                    "DepartamentoID": "10306"
                }
            },
            {
                "attributes": {
                    "Codigo": "11382",
                    "Nombre": "Zarzal_Valle del Cauca",
                    "DepartamentoID": "10329"
                }
            },
            {
                "attributes": {
                    "Codigo": "10655",
                    "Nombre": "Zetaquira_Boyaca",
                    "DepartamentoID": "10310"
                }
            },
            {
                "attributes": {
                    "Codigo": "10907",
                    "Nombre": "Zipacon_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "10908",
                    "Nombre": "Zipaquira_Cundinamarca",
                    "DepartamentoID": "10316"
                }
            },
            {
                "attributes": {
                    "Codigo": "11021",
                    "Nombre": "Zona bananera_Magdalena",
                    "DepartamentoID": "10320"
                }
            }
        ],

        initialize: function() {
            // On the Form Submission's field validaiton...
            var submitChannel = Backbone.Radio.channel( 'submit' );
            this.listenTo( submitChannel, 'validate:field', this.validateRequired );

            // on the Field's model value change...
            var fieldsChannel = Backbone.Radio.channel( 'fields' );
            this.listenTo( fieldsChannel, 'change:modelValue', this.validateRequired );

            this.listenTo( nfRadio.channel('colombia'), 'render:view', this.drawFields );
        },

        drawFields: function (e){
            let ref = this;

            e.$el.find('> .nf-field-label').remove();
            let $state_selector = jQuery(e.$el.find('.nf-field-colombia-state')[0]);
            let $city_selector = jQuery(e.$el.find('.nf-field-colombia-city')[0]);

            $state_selector.change(function () {
                let selectedValue = jQuery(this).val();
                let selectedDataset = [];
                jQuery.each(ref.cities, function (n, el) {
                    if (el.attributes.DepartamentoID == selectedValue) {
                        selectedDataset.push(el);
                    }
                });
                ref.fillSelect($city_selector, selectedDataset);
            });
            this.fillSelect($state_selector, this.states);
        },

        fillSelect: function ($dropdown, dataset) {

            $dropdown.html('');
            let html = '<option value="">Selecciona</option>';
            jQuery.each(dataset, function (n, el) {
                let name = el.attributes.Nombre;
                name = name.split('_');
                html += '<option value="' + el.attributes.Codigo + '">' + name[0] + '</option>';
            });
            $dropdown.append(html);//.trigger('change');
        },



        validateRequired: function( model ) {
            // Only validate a specific fields type.
            if( 'colombia' != model.get( 'type' ) ) return;

            // Only validate if the field is marked as required?
            if( 0 == model.get( 'required' ) ) return;

            // Check if Model has a value
            let stateVal = jQuery('#nf-field-colombia-state-' + model.get('id')).val();
            let stateLabel = jQuery('#nf-field-colombia-state-' + model.get('id')).find('option:selected').text();
            let cityVal = jQuery('#nf-field-colombia-city-' + model.get('id')).val();
            let cityLabel = jQuery('#nf-field-colombia-city-' + model.get('id')).find('option:selected').text();
            if ( stateVal == '' || cityVal == '' ) {
                model.set('value', '');
            } else {
                model.set('value', JSON.stringify(
                    {
                        state : {
                            id: stateVal,
                            value: stateLabel,
                        },
                        city : {
                            id: cityVal,
                            value: cityLabel,
                        },
                    }
                ));
            }

            if( model.get( 'value' ) ) {
                // Remove Error from Model
                Backbone.Radio.channel( 'fields' ).request( 'remove:error', model.get( 'id' ), 'custom-field-error' );
            } else {
                // Add Error to Model
                Backbone.Radio.channel( 'fields' ).request( 'add:error', model.get( 'id' ), 'custom-field-error' );
            }
        }
    });

    // Instantiate our custom field's controller, defined above.
    new colombiaFieldController();

});