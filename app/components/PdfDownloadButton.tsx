"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

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

interface CurriculumData {
  nome: string;
  email: string;
  telefone: string;
  experiencia: string;
  habilidades: string;
}

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
                <Text style={{ fontSize: 24, marginBottom: 10 }}>
                  {data.nome}
                </Text>
                <Text style={{ fontSize: 12, marginBottom: 10 }}>
                  Email: {data.email}
                </Text>
                <Text style={{ fontSize: 12, marginBottom: 10 }}>
                  Telefone: {data.telefone}
                </Text>
                <Text style={{ fontSize: 14, marginBottom: 5, marginTop: 10 }}>
                  Experiência Profissional:
                </Text>
                <Text style={{ fontSize: 11, marginBottom: 10 }}>
                  {data.experiencia}
                </Text>
                <Text style={{ fontSize: 14, marginBottom: 5 }}>
                  Habilidades:
                </Text>
                <Text style={{ fontSize: 11 }}>
                  {data.habilidades}
                </Text>
              </Page>
            </Document>
          }
          fileName="curriculo.pdf"
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
