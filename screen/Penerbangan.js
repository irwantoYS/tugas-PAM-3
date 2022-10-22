import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Jadwal = [
  {
    id: "1",
    asal: "Bandung",
    tujuan: "Surabaya",
    maskapai: "Lion Air",
    waktu: "16 juni 2023, 18:00",
  },
  {
    id: "2",
    asal: "Surabaya",
    tujuan: "Bandung",
    maskapai: "Lion Air",
    waktu: "16 juni 2023, 18:00",
  },
  {
    id: "3",
    asal: "Medan",
    tujuan: "Jakarta",
    maskapai: "Air Asia",
    waktu: "19 juni 2023, 18:00",
  },
  {
    id: "4",
    asal: "pekan baru",
    tujuan: "Jakarta",
    maskapai: "AirAsia",
    waktu: "20 Juni 2023, 18:00",
  },
  {
    id: "5",
    asal: "Raden Intan II",
    tujuan: "Jakarta",
    maskapai: "Batik Air",
    waktu: "21 Juni 2023, 18:00",
  },
  {
    id: "6",
    asal: "Pekan Baru",
    tujuan: "Raden Intan II",
    maskapai: "Batik Air",
    waktu: "22 Juni 2023, 18:00",
  },
  {
    id: "7",
    asal: "Jakarta",
    tujuan: "Surabaya",
    maskapai: "Lion Air",
    waktu: "23 Juni 2023, 18:00",
  },
  {
    id: "8",
    asal: "Halim Perdana",
    tujuan: "Silangit",
    maskapai: "Wins Air",
    waktu: "24 Juni 2023, 18:00",
  },
  {
    id: "9",
    asal: "Silangit",
    tujuan: "Halim Perdana",
    maskapai: "Lion Air",
    waktu: "25 Juni 2023, 18:00",
  },
];

const Penerbangan = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.tujuanasal}>
          {item.asal} - {item.tujuan}
        </Text>
        <View style={styles.waktupesawat}>
          <Entypo name="aircraft" size={24} color="black" />
          <Text style={styles.maskapai}>{item.maskapai}</Text>
          <Text style={styles.texttanggal}>{item.waktu}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.hiling}>Hiling.id</Text>
          <FontAwesome name="user" size={24} color="black" />
        </View>
        <Text style={styles.hasilpenerbangan}>
          Hasil Pencarian Penerbangan (Tanggal Keberangkatan)
        </Text>
      </View>

      <View>
        <FlatList
          data={Jadwal}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Text style={styles.kotak}>
        <Text style={styles.copyright}>
          Copyright Irwanto Yezekiel Sihotang - 120140227
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B6E388",
  },
  header: {
    width: "100%",
    backgroundColor: "#647E68",
    padding: 20,
  },
  hiling: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  hasilpenerbangan: {
    color: "black",
    textAlign: "center",
    top: 20,
  },
  top: {
    top: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  item: {
    backgroundColor: "#829460",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },

  waktupesawat: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  maskapai: {
    marginLeft: -80,
    fontSize: 20,
    fontWeight: "bold",
  },
  texttanggal: {
    color: "blue",
  },
  kotak: {
    width: "100%",
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#ffff",
    marginTop: 340,
    top: 700,
  },
  copyright: {
    color: "red",
    fontWeight: "bold",
    marginBottom: 20,
    padding: 20,
    marginTop: 10,
    textAlign: "center",
  },
});

export default Penerbangan;
