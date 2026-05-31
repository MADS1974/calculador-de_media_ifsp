import React, { useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export default function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [resultado, setResultado] = useState<any>(null);

  const [erros, setErros] = useState<any>({});

  const calcularMedia = () => {
    Keyboard.dismiss();
    let novosErros: any = {};

    if (!nome) novosErros.nome = "Preencha o nome";
    if (!email) novosErros.email = "Preencha o email";
    if (!nota1) novosErros.nota1 = "*";
    if (!nota2) novosErros.nota2 = "*";
    if (!nota3) novosErros.nota3 = "*";

    const n1 = parseFloat(nota1.replace(",", "."));
    const n2 = parseFloat(nota2.replace(",", "."));
    const n3 = parseFloat(nota3.replace(",", "."));

    if (nota1 && isNaN(n1)) novosErros.nota1 = "Inválido";
    if (nota2 && isNaN(n2)) novosErros.nota2 = "Inválido";
    if (nota3 && isNaN(n3)) novosErros.nota3 = "Inválido";

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      setResultado(null);
      return;
    }

    setErros({});
    const media = (n1 + n2 + n3) / 3;

    setResultado({
      nome: nome,
      email: email,
      notas: `${n1}, ${n2}, ${n3}`,
      media: media.toFixed(2),
    });
  };

  const reiniciar = () => {
    setNome("");
    setEmail("");
    setNota1("");
    setNota2("");
    setNota3("");
    setResultado(null);
    setErros({});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULADOR DE MÉDIA</Text>

      {/* Campo Nome */}
      <TextInput
        style={[styles.inputFull, erros.nome && styles.inputError]}
        placeholder="Nome"
        value={nome}
        onChangeText={(texto) => {
          setNome(texto);
          if (erros.nome) setErros({ ...erros, nome: null }); // Limpa o erro ao digitar
        }}
      />
      {erros.nome && <Text style={styles.errorText}>{erros.nome}</Text>}

      {/* Campo Email */}
      <TextInput
        style={[styles.inputFull, erros.email && styles.inputError]}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(texto) => {
          setEmail(texto);
          if (erros.email) setErros({ ...erros, email: null });
        }}
      />
      {erros.email && <Text style={styles.errorText}>{erros.email}</Text>}

      {/* Campos de Notas */}
      <View style={styles.row}>
        <View style={styles.notaContainer}>
          <TextInput
            style={[styles.inputSmall, erros.nota1 && styles.inputError]}
            placeholder="Nota 1"
            keyboardType="numeric"
            value={nota1}
            onChangeText={(texto) => {
              setNota1(texto);
              if (erros.nota1) setErros({ ...erros, nota1: null });
            }}
          />
          {erros.nota1 && (
            <Text style={styles.errorTextCenter}>{erros.nota1}</Text>
          )}
        </View>

        <View style={styles.notaContainer}>
          <TextInput
            style={[styles.inputSmall, erros.nota2 && styles.inputError]}
            placeholder="Nota 2"
            keyboardType="numeric"
            value={nota2}
            onChangeText={(texto) => {
              setNota2(texto);
              if (erros.nota2) setErros({ ...erros, nota2: null });
            }}
          />
          {erros.nota2 && (
            <Text style={styles.errorTextCenter}>{erros.nota2}</Text>
          )}
        </View>

        <View style={styles.notaContainer}>
          <TextInput
            style={[styles.inputSmall, erros.nota3 && styles.inputError]}
            placeholder="Nota 3"
            keyboardType="numeric"
            value={nota3}
            onChangeText={(texto) => {
              setNota3(texto);
              if (erros.nota3) setErros({ ...erros, nota3: null });
            }}
          />
          {erros.nota3 && (
            <Text style={styles.errorTextCenter}>{erros.nota3}</Text>
          )}
        </View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btnCalcular} onPress={calcularMedia}>
          <Text style={styles.btnText}>CALCULAR MÉDIA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnReiniciar} onPress={reiniciar}>
          <Text style={styles.btnText}>REINICIAR</Text>
        </TouchableOpacity>
      </View>

      {resultado && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Nome: {resultado.nome}</Text>
          <Text style={styles.resultText}>Email: {resultado.email}</Text>
          <Text style={styles.resultText}>Notas: {resultado.notas}</Text>
          <Text style={styles.resultText}>Média: {resultado.media}</Text>
        </View>
      )}
    </View>
  );
}
