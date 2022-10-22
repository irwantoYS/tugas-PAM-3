import { React, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [keberangkatan, setKeberangkatan] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Feather name="menu" size={24} color="black" />
        <Text style={styles.header}>Hiling.id</Text>
        <FontAwesome name="user" size={24} color="black" />
      </View>

      <View style={styles.card}>
        <Text style={styles.header2}>Lokasi Keberangkatan</Text>
        <View style={styles.maininput}>
          <MaterialIcons name="flight-takeoff" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={setKeberangkatan}
            value={keberangkatan}
            placeholder="Masukkan Lokasi Keberangkatan"
            selectTextOnFocus={false}
          />
        </View>
        <Text style={styles.header2}>Lokasi Tujuan</Text>
        <View style={styles.maininput}>
          <Entypo name="aircraft-landing" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={setTujuan}
            value={tujuan}
            placeholder="Masukkan Lokasi Tujuan"
          />
        </View>
        <Text style={styles.header2}>Tanggal Keberangkatan</Text>
        <View style={styles.maininput}>
          <MaterialIcons name="date-range" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={setTanggal}
            value={tanggal}
            placeholder="Masukkan Tanggal Keberangkatan"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Penerbangan")}>
          <Text style={styles.cari}>Cari</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.kotak}>
        <Text style={styles.copyright}>
          Copyright Irwanto Yezekiel Sihotang - 120140227
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#B6E388",
    overflow: "hidden",
    alignItems: "center",
  },
  top: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 40,
    justifyContent: "space-between",
  },
  maininput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#E5E5E5",
  },
  header: {
    color: "#172E58",
    fontSize: 30,
    fontWeight: "bold",
  },
  cari: {
    margin: 15,
    backgroundColor: "#7D6E83",
    fontSize: 20,
    borderRadius: 15,
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 100,
    fontweight: "Bold",
    top: 10,
  },
  header2: {
    margin: 5,
    fontWeight: "bold",
  },
  card: {
    top: 100,
    backgroundColor: "white",
    margin: "auto",
    width: "90%",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    width: "100%",
    padding: 10,
    borderRadius: 3,
  },
  kotak: {
    width: "100%",
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#ffff",
    marginTop: 340,
  },
  copyright: {
    color: "#797575",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: "auto",
    textAlign: "center",
  },
});

export default Home;
