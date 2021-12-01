import React from 'react';
import { Document, Page, Text, StyleSheet, Image } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import picture from './images/st_andrew_square_edinburgh_01_gillespies.jpg';

// Create styles
const styles = StyleSheet.create({
  page: {
    height: "500px",
    width: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

// Create Document Component
const MyDocument = () => (
  <Document >
    <Page >
      <Image
        src="https://img.icons8.com/android/96/000000/phone.png"
      />
      <Image
        src={picture}
      />
      <Text>Section #1</Text>
      <Text>Section #2</Text>
    </Page>
  </Document>
);

const App = () => (
  <PDFViewer style={styles.page}>
    <MyDocument />
  </PDFViewer>
);

export default App;
