"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { CurriculumData } from "./types";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false, loading: () => <button disabled>Carregando...</button> }
);
const Document = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.Document),
  { ssr: false }
);
const Page = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.Page),
  { ssr: false }
);
const Text = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.Text),
  { ssr: false }
);
const View = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.View),
  { ssr: false }
);

export default function PdfDownloadButton({ data }: { data: CurriculumData }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      {isLoaded && data?.nome ? (
        <PDFDownloadLink
          document={
            <Document>
              <Page
                style={{
                  padding: 40,
                  fontFamily: "Helvetica",
                }}
              >
                {/* Cabeçalho */}
                <View style={{ marginBottom: 20, borderBottom: "2 solid #333", paddingBottom: 10 }}>
                  <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 5 }}>
                    {data.nome}
                  </Text>
                  <Text style={{ fontSize: 11, color: "#666" }}>
                    {data.email} {data.telefone && `| ${data.telefone}`}
                  </Text>
                </View>

                {/* Resumo Profissional */}
                {data.resumo && (
                  <View style={{ marginBottom: 15 }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>
                      Resumo Profissional
                    </Text>
                    <Text style={{ fontSize: 11, lineHeight: 1.5 }}>
                      {data.resumo}
                    </Text>
                  </View>
                )}

                {/* Experiência Profissional */}
                {data.experiencia && (
                  <View style={{ marginBottom: 15 }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>
                      Experiência Profissional
                    </Text>
                    <Text style={{ fontSize: 11, lineHeight: 1.5 }}>
                      {data.experiencia}
                    </Text>
                  </View>
                )}

                {/* Habilidades */}
                {data.habilidades && (
                  <View style={{ marginBottom: 15 }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>
                      Habilidades
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                      {data.habilidades}
                    </Text>
                  </View>
                )}

                {/* Categorias Personalizadas */}
                {data.categories && data.categories.map((category) => (
                  category.items.length > 0 && (
                    <View key={category.id} style={{ marginBottom: 15 }}>
                      <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 8 }}>
                        {category.name}
                      </Text>
                      {category.items.map((item) => (
                        <View key={item.id} style={{ marginBottom: 10, paddingLeft: 10, borderLeft: "2 solid #4299e1" }}>
                          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 3 }}>
                            <View style={{ flex: 1 }}>
                              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                                {item.title}
                              </Text>
                              {item.subtitle && (
                                <Text style={{ fontSize: 10, color: "#666" }}>
                                  {item.subtitle}
                                </Text>
                              )}
                            </View>
                            <View style={{ textAlign: "right" }}>
                              {item.date && (
                                <Text style={{ fontSize: 10, color: "#666" }}>
                                  {item.date}
                                </Text>
                              )}
                              {item.location && (
                                <Text style={{ fontSize: 10, color: "#666" }}>
                                  {item.location}
                                </Text>
                              )}
                            </View>
                          </View>
                          {item.description && (
                            <Text style={{ fontSize: 10, lineHeight: 1.4, marginTop: 3 }}>
                              {item.description}
                            </Text>
                          )}
                        </View>
                      ))}
                    </View>
                  )
                ))}
              </Page>
            </Document>
          }
          fileName="curriculo.pdf"
          className="rounded-md bg-green-600 px-4 py-2 text-white shadow-md transition-all duration-200 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          {({ loading }) =>
            loading ? "Gerando PDF..." : "Baixar Currículo (PDF)"
          }
        </PDFDownloadLink>
      ) : (
        <button
          onClick={() => setIsLoaded(true)}
          className="rounded-md bg-green-600 px-4 py-2 text-white shadow-md transition-all duration-200 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Preparar Download
        </button>
      )}
    </div>
  );
}
