import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  inputFull: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 5,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 10,
  },
  notaContainer: {
    width: "30%",
  },
  inputSmall: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    width: "100%",
    fontSize: 16,
    textAlign: "center",
  },

  inputError: {
    borderColor: "#D32F2F",
    borderWidth: 2,
  },
  errorText: {
    color: "#D32F2F",
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 5,
  },
  errorTextCenter: {
    color: "#D32F2F",
    fontSize: 12,
    textAlign: "center",
    marginTop: 2,
  },

  btnCalcular: {
    backgroundColor: "#63cc32",
    padding: 15,
    borderRadius: 4,
    width: "48%",
    alignItems: "center",
  },
  btnReiniciar: {
    backgroundColor: "#D32F2F",
    padding: 15,
    borderRadius: 4,
    width: "48%",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  resultBox: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 4,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
});
