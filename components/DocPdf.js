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
} from "@react-pdf/renderer";

const ListItem = ({ children }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: "100%",
        }}
      >
        <Text>{"\u2022" + " "}</Text>
      </View>
      <Text>{children}</Text>
    </View>
  );
};

const Line = () => {
  return (
    <View
      style={{
        height: "1px",
        width: "100%",
        backgroundColor: "black",
        marginBottom: "8px",
      }}
    ></View>
  );
};

Font.register({
  family: "Georgia",

  fonts: [
    {
      src: "/fonts/Georgia.ttf",
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: "/fonts/georgia bold.ttf",
      fontStyle: "bold",
      fontWeight: "bold",
    },
  ],
});

const Pdf = () => {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          fontFamily: "Georgia",
          fontSize: "12px",
          padding: "48px",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: "18px",
                fontStyle: "bold",
              }}
            >
              Andri Febrian
            </Text>
            <Text
              style={{
                fontSize: "14px",
                fontStyle: "bold",
              }}
            >
              Junior Frontend
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Text>Blok Wagir, Gantar, Indramayu 45264</Text>
            <Text
              style={{
                fontStyle: "bold",
              }}
            >
              0881-0232-84544
            </Text>
            <Text>andri.feb.26@gmail.com</Text>
            <Text>github.com/andribob26</Text>
          </View>
        </View>
        {/* pengalaman */}
        <View
          style={{
            marginBottom: "8px",
          }}
        >
          <Text style={{ fontStyle: "bold", fontSize: "16px" }}>
            Pengalaman
          </Text>
          <Line />
          <View>
            <View>
              <Text>
                <Text style={{ fontStyle: "bold" }}>
                  PT. Digi Tekno Indonesia
                </Text>{" "}
                - Freelance Frontend Develover
              </Text>
              <Text style={{ fontSize: "10px", marginBottom: "8px" }}>
                agustus - september 2022
              </Text>
            </View>
            <View
              style={{
                marginLeft: "16px",
              }}
            >
              <ListItem>Perancangan Antarmuka</ListItem>
              <ListItem>Slicing Antarmuka website</ListItem>
              <ListItem>Integrasi REST API</ListItem>
              <ListItem>Menggunakan React.js, Redux, TailwindCSS</ListItem>
            </View>
          </View>
        </View>
        {/* project pribadi */}
        <View>
          <Text style={{ fontStyle: "bold", fontSize: "16px" }}>
            Projek Pribadi
          </Text>
          <Line />

          <View
            style={{
              marginBottom: "8px",
            }}
          >
            <View>
              <Text style={{ fontStyle: "bold" }}>GPS Pengukur Area</Text>
            </View>
            <View
              style={{
                marginLeft: "16px",
              }}
            >
              <ListItem>
                Aplikasi berbasis mobile yang digunakan untuk membantu mengukur
                luas area yang memanfaatkan gps dalam pengukurannya
              </ListItem>
              <ListItem>Menggunakan Dart(Flutter), Leaflet</ListItem>
            </View>
          </View>

          <View
            style={{
              marginBottom: "8px",
            }}
          >
            <View>
              <Text style={{ fontStyle: "bold" }}>Pangkas Gambar Simpel</Text>
            </View>
            <View
              style={{
                marginLeft: "16px",
              }}
            >
              <ListItem>
                Aplikasi berbasis mobile crop/pangkas gambar yang mudah di
                gunakan
              </ListItem>
              <ListItem>Menggunakan Dart(Flutter)</ListItem>
            </View>
          </View>

          <View
            style={{
              marginBottom: "8px",
            }}
          >
            <View>
              <Text style={{ fontStyle: "bold" }}>Indo TV</Text>
            </View>
            <View
              style={{
                marginLeft: "16px",
              }}
            >
              <ListItem>
                Aplikasi berbasis mobile untuk menonton siaran langsung televisi
                lokal
              </ListItem>
              <ListItem>Menggunakan Dart(Flutter), Firebase</ListItem>
            </View>
          </View>
        </View>
        {/* pendidikan */}
        <View
          style={{
            marginBottom: "8px",
          }}
        >
          <Text style={{ fontStyle: "bold", fontSize: "16px" }}>
            Pendidikan
          </Text>
          <Line />
          <View>
            <View>
              <Text>
                <Text style={{ fontStyle: "bold" }}>
                  Universitas Komputer Indonesia
                </Text>{" "}
                - S1 Teknik Informatika
              </Text>
              <Text style={{ fontSize: "10px", marginBottom: "8px" }}>
                2018 - 2023
              </Text>
            </View>
          </View>
        </View>
        {/* Keahlian */}
        <View
          style={{
            marginBottom: "8px",
          }}
        >
          <Text style={{ fontStyle: "bold", fontSize: "16px" }}>
            Keahlian
          </Text>
          <Line />
          <View
            style={{
              marginLeft: "16px",
            }}
          >
            <ListItem>Html</ListItem>
            <ListItem>Css</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>Dart</ListItem>
            <ListItem>TailwindCss</ListItem>
            <ListItem>React.js</ListItem>
            <ListItem>Next.js</ListItem>
            <ListItem>Flutter</ListItem>
            <ListItem>Express.js</ListItem>
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
