"use client";

import { useState, useEffect } from "react";
import { CurriculumData } from "./types";

interface PdfDownloadButtonProps {
  data: CurriculumData;
  template: "modern" | "classic" | "minimal";
}

export default function PdfDownloadButton({ data, template }: PdfDownloadButtonProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ReactPDF, setReactPDF] = useState<any>(null);

  useEffect(() => {
    if (isLoaded && !ReactPDF) {
      import("@react-pdf/renderer").then((mod) => {
        setReactPDF(mod);
      });
    }
  }, [isLoaded, ReactPDF]);

  if (!isLoaded) {
    return (
      <button
        onClick={() => setIsLoaded(true)}
        className="flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-green-600 to-emerald-600 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-200 hover:from-green-700 hover:to-emerald-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <span>📄</span>
        Preparar Download
      </button>
    );
  }

  if (!ReactPDF || !data?.nome) {
    return (
      <button
        disabled
        className="flex items-center justify-center gap-2 rounded-lg bg-gray-400 px-6 py-3 text-white font-semibold shadow-md cursor-not-allowed opacity-60"
      >
        <span>⏳</span>
        Carregando...
      </button>
    );
  }

  const { PDFDownloadLink, Document, Page, Text, View } = ReactPDF;

  // Estilos baseados no template
  const getTemplateStyles = () => {
    switch (template) {
      case "modern":
        return {
          header: { backgroundColor: "#4f46e5", color: "white", padding: 20, marginBottom: 15 },
          headerTitle: { fontSize: 32, fontWeight: "bold", marginBottom: 6, letterSpacing: -0.5 },
          headerInfo: { fontSize: 11, opacity: 0.9 },
          sectionTitle: { fontSize: 16, fontWeight: "bold", color: "#2563eb", borderBottom: "2 solid #2563eb", paddingBottom: 4, marginBottom: 10, marginTop: 15 },
          text: { fontSize: 11, lineHeight: 1.6, color: "#374151", textAlign: "justify" },
          categoryBorder: { borderLeft: "4 solid #3b82f6", paddingLeft: 10, backgroundColor: "#eff6ff", padding: 10, marginBottom: 10, borderRadius: 4 },
          skill: { backgroundColor: "#3b82f6", color: "white", padding: "4 8", borderRadius: 12, fontSize: 9, marginRight: 4, marginBottom: 4 },
        };
      case "classic":
        return {
          header: { borderBottom: "4 solid #1f2937", paddingBottom: 15, paddingTop: 5, marginBottom: 15 },
          headerTitle: { fontSize: 32, fontWeight: "bold", color: "#111827", marginBottom: 6, fontFamily: "Times-Roman", letterSpacing: -0.5 },
          headerInfo: { fontSize: 11, color: "#4b5563", fontFamily: "Times-Roman" },
          sectionTitle: { fontSize: 14, fontWeight: "bold", color: "#111827", borderBottom: "1 solid #9ca3af", paddingBottom: 3, marginBottom: 10, marginTop: 15, textTransform: "uppercase", letterSpacing: 1.5 },
          text: { fontSize: 11, lineHeight: 1.5, color: "#374151", textAlign: "justify" },
          categoryBorder: { borderLeft: "2 solid #6b7280", paddingLeft: 10, marginBottom: 10 },
          skill: { backgroundColor: "#1f2937", color: "white", padding: "3 8", borderRadius: 4, fontSize: 9, fontFamily: "Times-Roman", marginRight: 4, marginBottom: 4 },
        };
      case "minimal":
        return {
          header: { borderBottom: "1 solid #9ca3af", paddingBottom: 10, paddingTop: 5, marginBottom: 15, backgroundColor: "#f9fafb" },
          headerTitle: { fontSize: 28, fontWeight: "normal", color: "#111827", marginBottom: 5, letterSpacing: 1 },
          headerInfo: { fontSize: 9, color: "#6b7280", textTransform: "uppercase", letterSpacing: 1.5 },
          sectionTitle: { fontSize: 13, fontWeight: "normal", color: "#111827", marginBottom: 10, marginTop: 15, textTransform: "uppercase", letterSpacing: 3 },
          text: { fontSize: 11, lineHeight: 1.5, color: "#4b5563", textAlign: "justify" },
          categoryBorder: { borderLeft: "1 solid #d1d5db", paddingLeft: 10, marginBottom: 10 },
          skill: { border: "1 solid #9ca3af", color: "#374151", padding: "2 6", borderRadius: 2, fontSize: 8, textTransform: "uppercase", letterSpacing: 0.5, marginRight: 4, marginBottom: 4 },
        };
      default:
        return {
          header: { borderBottom: "2 solid #333", paddingBottom: 10, marginBottom: 15 },
          headerTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 5 },
          headerInfo: { fontSize: 11, color: "#666" },
          sectionTitle: { fontSize: 14, fontWeight: "bold", marginBottom: 5, marginTop: 10 },
          text: { fontSize: 11, lineHeight: 1.5 },
          categoryBorder: { borderLeft: "2 solid #4299e1", paddingLeft: 10, marginBottom: 10 },
        };
    }
  };

  const styles = getTemplateStyles();

  const MyDocument = () => (
    <Document>
      <Page
        style={{
          padding: 40,
          fontFamily: "Helvetica",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            {data.nome}
          </Text>
          <Text style={styles.headerInfo}>
            {data.email && `✉ ${data.email}`}{data.telefone && data.email && ` • `}{data.telefone && `☎ ${data.telefone}`}
          </Text>
        </View>

        {/* Resumo Profissional */}
        {data.resumo && (
          <View>
            <Text style={styles.sectionTitle}>
              RESUMO PROFISSIONAL
            </Text>
            <Text style={{ ...styles.text, textAlign: "justify" }}>
              {data.resumo}
            </Text>
          </View>
        )}

        {/* Experiência Profissional */}
        {data.experiencia && (
          <View>
            <Text style={styles.sectionTitle}>
              EXPERIÊNCIA PROFISSIONAL
            </Text>
            <Text style={{ ...styles.text, textAlign: "justify" }}>
              {data.experiencia}
            </Text>
          </View>
        )}

        {/* Habilidades */}
        {data.habilidades && (
          <View>
            <Text style={styles.sectionTitle}>
              HABILIDADES
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 6 }}>
              {data.habilidades.split(",").map((skill, index) => {
                const skillStyle = styles.skill || {};
                return (
                  <View key={index} style={skillStyle}>
                    <Text style={{ fontSize: (skillStyle as { fontSize?: number }).fontSize || 9, color: (skillStyle as { color?: string }).color || "#000" }}>
                      {skill.trim()}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {/* Categorias Personalizadas */}
        {data.categories && data.categories.map((category) => (
          category.items.length > 0 && (
            <View key={category.id}>
              <Text style={styles.sectionTitle}>
                {category.name.toUpperCase()}
              </Text>
              {category.items.map((item) => (
                <View key={item.id} style={styles.categoryBorder}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 4 }}>
                    <View style={{ flex: 1, paddingRight: 10 }}>
                      <Text style={{ fontSize: 11, fontWeight: "bold", color: "#111827" }}>
                        {item.title}
                      </Text>
                      {item.subtitle && (
                        <Text style={{ fontSize: 9, color: "#6b7280", marginTop: 2 }}>
                          {item.subtitle}
                        </Text>
                      )}
                    </View>
                    <View style={{ textAlign: "right", alignItems: "flex-end" }}>
                      {item.date && (
                        <Text style={{ fontSize: 9, color: "#6b7280", fontWeight: "bold" }}>
                          {item.date}
                        </Text>
                      )}
                      {item.location && (
                        <Text style={{ fontSize: 8, color: "#9ca3af", marginTop: 1 }}>
                          {item.location}
                        </Text>
                      )}
                    </View>
                  </View>
                  {item.description && (
                    <Text style={{ ...styles.text, marginTop: 4 }}>
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
  );

  return (
    <PDFDownloadLink
      document={<MyDocument />}
      fileName="curriculo.pdf"
      className="flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-green-600 to-emerald-600 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-200 hover:from-green-700 hover:to-emerald-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      {({ loading }: { loading: boolean }) =>
        loading ? (
          <>
            <span>⏳</span>
            Gerando PDF...
          </>
        ) : (
          <>
            <span>📥</span>
            Baixar PDF
          </>
        )
      }
    </PDFDownloadLink>
  );
}
