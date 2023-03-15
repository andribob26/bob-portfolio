import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  PDFViewer,
  StyleSheet,
  Font,
  PDFDownloadLink,
  Link,
} from "@react-pdf/renderer";

const ListItem = ({ children }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "2px",
      }}
    >
      <View
        style={{
          height: "100%",
        }}
      >
        <Text>{"\u2022" + " "}</Text>
      </View>
      {children}
    </View>
  );
};

const Line = ({ height, color }) => {
  return (
    <View
      style={{
        height: height,
        width: "100%",
        backgroundColor: color,
      }}
    ></View>
  );
};

Font.register({
  family: "Lexend",

  fonts: [
    {
      src: "/fonts/Lexend-Regular.ttf",
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: "/fonts/Lexend-Bold.ttf",
      fontStyle: "bold",
      fontWeight: "bold",
    },
  ],
});

export const Pdf = () => {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          fontFamily: "Lexend",
          fontSize: "10px",
          color: "#283747",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "16px",
            padding: "48px 48px 0px 48px",
          }}
        >
          <Image
            style={{
              borderRadius: "100%",
              height: "150px",
              width: "150px",
              objectFit: "cover",
            }}
            src={"/images/andribgbiru.jpg"}
          />
          <View
            style={{
              display: "flex",
              flex: 2,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px 20px 0px 20px",
            }}
          >
            <Text
              style={{
                fontSize: "28px",
                fontStyle: "bold",
              }}
            >
              Andri{" "}
              <Text
                style={{
                  color: "#E74C3C",
                }}
              >
                Febrian
              </Text>
            </Text>
            <Line height={"1.5px"} color={"#5d6d7E"} />
            <Text
              style={{
                fontSize: "14px",
                fontStyle: "bold",
              }}
            >
              Junior Programmer
            </Text>
          </View>
        </View>

        <Line height={6} color={"#EBEDEF"} />
        {/* content-resume */}
        <View
          style={{
            gap: "10px",
            display: "flex",
            flexDirection: "row",
            marginTop: "16px",
            padding: "0px 48px 48px 48px",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1.5px solid #5d6d7E",
            }}
          >
            <View
              style={{
                marginBottom: "8px",
              }}
            >
              <Text
                style={{
                  fontStyle: "bold",
                  fontSize: "16px",
                  marginBottom: "6px",
                  color: "#E74C3C",
                }}
              >
                Kontak
              </Text>
              <View>
                <ListItem>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text>Blok Wagir, Gantar,</Text>
                    <Text>Indramayu 45264</Text>
                  </View>
                </ListItem>
                <ListItem>
                  <Link
                    src="https://wa.me/0881023284544"
                    style={{
                      color: "#283747",
                    }}
                  >
                    0881-0232-84544
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    src="mailto:andri.feb.26@gmail.com"
                    style={{
                      color: "#283747",
                    }}
                  >
                    andri.feb.26@gmail.com
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    src="https://github.com/andribob26"
                    style={{
                      color: "#283747",
                    }}
                  >
                    github.com/andribob26
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    src="https://bob-portfolio.vercel.app/"
                    style={{
                      color: "#283747",
                    }}
                  >
                    bob-portfolio.vercel.app
                  </Link>
                </ListItem>
              </View>
            </View>

            <View
              style={{
                marginBottom: "8px",
              }}
            >
              <Text
                style={{
                  fontStyle: "bold",
                  fontSize: "16px",
                  marginBottom: "6px",
                  color: "#E74C3C",
                }}
              >
                Keahlian
              </Text>
              <View>
                <ListItem>
                  <Text>Html</Text>
                </ListItem>
                <ListItem>
                  <Text>Css</Text>
                </ListItem>
                <ListItem>
                  <Text>JavaScript</Text>
                </ListItem>
                <ListItem>
                  <Text>TypeScript</Text>
                </ListItem>
                <ListItem>
                  <Text>Dart</Text>
                </ListItem>
                <ListItem>
                  <Text>Node.js</Text>
                </ListItem>
                <ListItem>
                  <Text>React.js</Text>
                </ListItem>
                <ListItem>
                  <Text>Next.js</Text>
                </ListItem>
                <ListItem>
                  <Text>TailwindCss</Text>
                </ListItem>
                <ListItem>
                  <Text>Flutter</Text>
                </ListItem>
                <ListItem>
                  <Text>Express.js</Text>
                </ListItem>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 2,
            }}
          >
            {/* pengalaman */}
            <View
              style={{
                marginBottom: "8px",
              }}
            >
              <Text
                style={{
                  fontStyle: "bold",
                  fontSize: "16px",
                  marginBottom: "6px",
                  color: "#E74C3C",
                }}
              >
                Pengalaman
              </Text>
              <View>
                <View>
                  <Text>
                    <Text style={{ fontStyle: "bold" }}>
                      PT. Digi Tekno Indonesia
                    </Text>{" "}
                    - Freelance Frontend Develover
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      color: "#5d6d7E",
                      fontSize: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Text>agustus - september 2022</Text>
                    <Text>Jl. Magna Barat Blok MD. 18, Bandung</Text>
                  </View>
                </View>
                <View>
                  <ListItem>
                    <Text>
                      Slicing Antarmuka website menggunakan TailwindCss
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>Mengintegrasikan REST API dari backend</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Menggunakan Redux untuk state managementnya</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Menggunakan JavaScript(React.js)</Text>
                  </ListItem>
                </View>
              </View>
            </View>
            {/* project pribadi */}
            <View>
              <Text
                style={{
                  fontStyle: "bold",
                  fontSize: "16px",
                  marginBottom: "6px",
                  color: "#E74C3C",
                }}
              >
                Projek Pribadi
              </Text>
              <View
                style={{
                  marginBottom: "8px",
                }}
              >
                <View>
                  <Text style={{ fontStyle: "bold", marginBottom: "8px" }}>
                    GPS Pengukur Area
                  </Text>
                </View>
                <View>
                  <ListItem>
                    <Text>Menggunakan GetX untuk state managementnya</Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      Memanfaatkan GPS pada Smartphone untuk mempermudah
                      menentukan titik kordinat
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>Menggunakan leaflet.js dalam pemetaan areanya</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Menggunakan Dart(Flutter)</Text>
                  </ListItem>
                  <ListItem>
                    <Link
                      src="https://github.com/andribob26/gps-pengukur-area"
                      style={{
                        color: "#283747",
                      }}
                    >
                      github.com/andribob26/gps-pengukur-area
                    </Link>
                  </ListItem>
                </View>
              </View>

              <View
                style={{
                  marginBottom: "8px",
                }}
              >
                <View>
                  <Text style={{ fontStyle: "bold", marginBottom: "8px" }}>
                    Pangkas Gambar Simpel
                  </Text>
                </View>
                <View>
                  <ListItem>
                    <Text>Menggunakan GetX untuk state managementnya</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Menggunakan Dart(Flutter)</Text>
                  </ListItem>
                  <ListItem>
                    <Link
                      src="https://github.com/andribob26/pangkas-gambar-simpel"
                      style={{
                        color: "#283747",
                      }}
                    >
                      github.com/andribob26/pangkas-gambar-simpel
                    </Link>
                  </ListItem>
                </View>
              </View>

              <View
                style={{
                  marginBottom: "8px",
                }}
              >
                <View>
                  <Text style={{ fontStyle: "bold", marginBottom: "8px" }}>
                    Indo TV
                  </Text>
                </View>
                <View>
                  <ListItem>
                    <Text>Mengunakan Firebase untuk menyimpan alamat IPTV</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Menggunakan GetX untuk state managementnya</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Menggunakan Dart(Flutter)</Text>
                  </ListItem>
                  <ListItem>
                    <Link
                      src="https://github.com/andribob26/indo-tv"
                      style={{
                        color: "#283747",
                      }}
                    >
                      github.com/andribob26/indo-tv
                    </Link>
                  </ListItem>
                </View>
              </View>

              {/* <View
                style={{
                  marginBottom: "8px",
                }}
              >
                <View>
                  <Text style={{ fontStyle: "bold", marginBottom: "8px" }}>
                    Aplikasi Pengelolaan Produksi Beras PD. ADM
                  </Text>
                </View>
                <View>
                  <ListItem>
                    <Text>
                      Menggunakan ORM Sequelize pada backend untuk mempermudah
                      dalam Query dan Relasi ke Database PostgreSQL
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      Menggunakan Node.js(Express.js) untuk pembuatan REST API
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>Menggunakan TailwindCSS untuk stylingnya</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Menggunakan Redux untuk mengelola statenya</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Menggunakan JavaScript(React.js)</Text>
                  </ListItem>
                  <ListItem>
                    <Link
                      src="https://github.com/andribob26/adm-app"
                      style={{
                        color: "#E74C3C",
                      }}
                    >
                     github.com/andribob26/adm-app
                    </Link>
                  </ListItem>
                </View>
              </View> */}
            </View>

            {/* pendidikan */}
            <View>
              <Text
                style={{
                  fontStyle: "bold",
                  fontSize: "16px",
                  marginBottom: "6px",
                  color: "#E74C3C",
                }}
              >
                Pendidikan
              </Text>
              <View>
                <View>
                  <Text>
                    <Text style={{ fontStyle: "bold" }}>
                      Universitas Komputer Indonesia
                    </Text>{" "}
                    - S1 Teknik Informatika
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      color: "#5d6d7E",
                      fontSize: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Text>2018 - 2023</Text>
                    <Text>Jl. Dipati Ukur No.112-116, Bandung</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* Keahlian */}
            {/* <View
              style={{
                marginBottom: "8px",
              }}
            >
              <Text
                style={{
                  fontStyle: "bold",
                  fontSize: "16px",
                  marginBottom: "6px",
                }}
              >
                Keahlian
              </Text>
              <View
                style={{
                  marginLeft: "16px",
                }}
              >
                <ListItem>Html</ListItem>
                <ListItem>Css</ListItem>
                <ListItem>JavaScript</ListItem>
              </View>
            </View> */}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const DocPdf = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden">
      <PDFViewer
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Pdf />
      </PDFViewer>
    </div>
  );
};

export default DocPdf;
