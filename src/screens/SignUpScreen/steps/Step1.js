import React, { useEffect } from "react";
import {
  Alert,
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import SocialSignInButtons from "../../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const Step1 = () => {
  const { register, setValue, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    register("name");
    register("email");
    register("cpf");
    register("phone");
    register("birth_date");
    register("gender");
  }, [register]);


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>

        <TextInput
          style={styles.input}
          label={"name"}
          placeholder={"Digite seu Nome Completo"}
          onChangeText={(text) => setValue("name", text)}
        />

        <TextInput
          style={styles.input}
          secureTextEntry
          label={"email"}
          placeholder={"Digite seu Email"}
          onChangeText={(text) => setValue("email", text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          label={"cpf"}
          placeholder={"Digite seu CPF"}
          onChangeText={(text) => setValue("cpf", text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          label={"phone"}
          placeholder={"Digite seu Telefone"}
          onChangeText={(text) => setValue("phone", text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          label={"birth_date"}
          placeholder={"Digite sua data de nascimento"}
          onChangeText={(text) => setValue("birth_date", text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          label={"gender"}
          placeholder={"Digite seu Gênero"}
          onChangeText={(text) => setValue("gender", text)}
        />
        <CustomButton onPress={handleSubmit(onSubmit)} text="Continuar" />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 40,
    margin: 1,
    padding: 1,
  },
});
export default Step1;
