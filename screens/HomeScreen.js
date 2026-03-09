import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>

                <View>
                    <Text style={styles.hello}>Hello ✌️</Text>
                    <Text style={styles.name}>Nguyễn Đình Duy</Text>
                </View>

                <Image
                    source={require("../assets/NguyenDinhDuy.png")}
                    style={styles.avatar}
                />

            </View>

            <Text style={styles.title}>Your Insights</Text>

            {/* Grid */}
            <View style={styles.grid}>

                <TouchableOpacity style={styles.card}
                    onPress={() => navigation.navigate("Scan")}>
                    <View style={styles.iconBox}>
                        <Ionicons name="scan-outline" size={30} color="#4A6CF7" />
                    </View>

                    <Text style={styles.cardTitle}>Scan new</Text>
                    <Text style={styles.cardSub}>Scanned 483</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <View style={[styles.iconBox, { backgroundColor: "#F6E3D7" }]}>
                        <Ionicons name="warning-outline" size={30} color="#D9895B" />
                    </View>

                    <Text style={styles.cardTitle}>Counterfeits</Text>
                    <Text style={styles.cardSub}>Counterfeited 32</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <View style={[styles.iconBox, { backgroundColor: "#DFF3EF" }]}>
                        <Ionicons name="checkmark-circle-outline" size={30} color="#58C1A8" />
                    </View>

                    <Text style={styles.cardTitle}>Success</Text>
                    <Text style={styles.cardSub}>Checkouts 8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <View style={[styles.iconBox, { backgroundColor: "#DDEAF7" }]}>
                        <Ionicons name="calendar-outline" size={30} color="#4A90E2" />
                    </View>

                    <Text style={styles.cardTitle}>Directory</Text>
                    <Text style={styles.cardSub}>History 26</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 20,
        paddingTop: 50
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    hello: {
        fontSize: 28,
        fontWeight: "bold"
    },

    name: {
        fontSize: 18,
        color: "#666"
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 15
    },

    title: {
        fontSize: 24,
        marginTop: 30,
        marginBottom: 20,
        fontWeight: "600"
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    card: {
        width: "47%",
        height: 160,
        backgroundColor: "#fff",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },

    iconBox: {
        width: 70,
        height: 70,
        borderRadius: 20,
        backgroundColor: "#E4E8FF",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: "600"
    },

    cardSub: {
        color: "#999",
        marginTop: 4
    }

});