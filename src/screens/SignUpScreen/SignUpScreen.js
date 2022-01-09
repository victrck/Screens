import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import CheckBox from "expo-checkbox";
import { useForm } from "react-hook-form";
import PhoneInput from "react-native-phone-number-input";

const SignUpScreen = () => {
  const { register, setValue, handleSubmit } = useForm();
  const [error, setError] = useState(false);

  const submitStep1 = (data) => {
    console.log(data);
    // setError(true);
  };

  const submitStep2 = (data) => {
    console.log(data);
    // setError(true);
  };

  const submitStep3 = (data) => {
    console.log(data);
    // setError(true);
  };

  const submitStep4 = (data) => {
    console.log(data);
    // setError(true);
  };

  const onSubmitFinal = (data) => {
    register("accept_terms", { value: true });
    console.log(data);
    // // setError(true);
  };

  useEffect(() => {
    register("type");
    register("country");
    register("accept_terms");
    register("name");
    register("email");
    register("cpf");
    register("phone");
    register("birth_date");
    register("postalcode_residence");
    register("number_residence");
    register("complement_residence");
    register("cnh");
    register("license_plate");
    register("vehicle_model_id");
    register("year");
    register("color");
  }, [register]);

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ProgressSteps labelFontSize={10}>
        <ProgressStep
          label="Dados Pessoais"
          onNext={handleSubmit(submitStep1)}
          nextBtnText="Próximo"
          errors={error}
          nextBtnStyle={styles_button.container_PRIMARY}
          nextBtnTextStyle={styles_button.text_TERTIARY}
        >
          <View style={styles.root}>
            <TextInput
              style={styles.input}
              label={"name"}
              placeholder={"Nome Completo"}
              onChangeText={(text) => setValue("name", text)}
            />

            <TextInput
              style={styles.input}
              label={"email"}
              placeholder={"Email"}
              onChangeText={(text) => setValue("email", text)}
            />
            <TextInput
              style={styles.input}
              label={"cpf"}
              placeholder={"CPF"}
              onChangeText={(text) => setValue("cpf", text)}
            />
            <PhoneInput
              containerStyle={styles.input_phone}
              placeholder={"Telefone"}
              defaultCode="BR"
              onChangeFormattedText={(text) => setValue("phone", text)}
            />
            <TextInput
              style={styles.input}
              label={"birth_date"}
              placeholder={"Data de nascimento"}
              onChangeText={(text) => setValue("birth_date", text)}
            />
            <TextInput
              style={styles.input}
              label={"gender"}
              placeholder={"Gênero"}
              onChangeText={(text) => setValue("gender", text)}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Endereço"
          onNext={handleSubmit(submitStep2)}
          nextBtnText="Próximo"
          errors={error}
          previousBtnText="Voltar"
          previousBtnStyle={styles_button.container_PRIMARY}
          previousBtnTextStyle={styles_button.text_TERTIARY}
          nextBtnStyle={styles_button.container_PRIMARY}
          nextBtnTextStyle={styles_button.text_TERTIARY}
        >
          <View style={styles.root}>
            <TextInput
              style={styles.input}
              label={"postalcode_residence"}
              placeholder={"Digite seu CEP."}
              onChangeText={(text) => setValue("postalcode_residence", text)}
            />
            <TextInput
              style={styles.input}
              label={"number_residence"}
              placeholder={"Número da casa."}
              onChangeText={(text) => setValue("number_residence", text)}
            />
            <TextInput
              style={styles.input}
              label={"complement_residence"}
              placeholder={"Complemento do endereço."}
              onChangeText={(text) => setValue("complement_residence", text)}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Carro"
          onNext={handleSubmit(submitStep3)}
          nextBtnText="Próximo"
          errors={error}
          previousBtnText="Voltar"
          previousBtnStyle={styles_button.container_PRIMARY}
          previousBtnTextStyle={styles_button.text_TERTIARY}
          nextBtnStyle={styles_button.container_PRIMARY}
          nextBtnTextStyle={styles_button.text_TERTIARY}
        >
          <View style={styles.root}>
            <TextInput
              style={styles.input}
              label={"cnh"}
              placeholder={"Digite o numero da sua CNH."}
              onChangeText={(text) => setValue("cnh", text)}
            />

            <TextInput
              style={styles.input}
              label={"license_plate"}
              placeholder={"Placa do Carro."}
              onChangeText={(text) => setValue("license_plate", text)}
            />
            <TextInput
              style={styles.input}
              label={"vehicle_model_id"}
              placeholder={"Modelo do carro."}
              onChangeText={(text) => setValue("vehicle_model_id", text)}
            />
            <TextInput
              style={styles.input}
              label={"year"}
              placeholder={"Ano do carro."}
              onChangeText={(text) => setValue("year", text)}
            />
            <TextInput
              style={styles.input}
              label={"color"}
              placeholder={"Cor do carro."}
              onChangeText={(text) => setValue("color", text)}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Documentos"
          onNext={handleSubmit(submitStep4)}
          nextBtnText="Próximo"
          errors={error}
          previousBtnText="Voltar"
          previousBtnStyle={styles_button.container_PRIMARY}
          previousBtnTextStyle={styles_button.text_TERTIARY}
          nextBtnStyle={styles_button.container_PRIMARY}
          nextBtnTextStyle={styles_button.text_TERTIARY}
        ></ProgressStep>
        <ProgressStep
          label="Politica de Privacidade"
          onSubmit={handleSubmit(onSubmitFinal)}
          nextBtnText="Próximo"
          errors={error}
          nextBtnDisabled={!isSelected}
          previousBtnText="Voltar"
          previousBtnStyle={styles_button.container_PRIMARY}
          previousBtnTextStyle={styles_button.text_TERTIARY}
          nextBtnStyle={styles_button.container_PRIMARY}
          nextBtnTextStyle={styles_button.text_TERTIARY}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Terms and conditions</Text>
            <ScrollView style={styles.tcContainer}>
              <Text style={styles.tcP}>
                Welcome to our website. If you continue to browse and use this
                website, you are agreeing to comply with and be bound by the
                following terms and conditions of use, which together with our
                privacy policy govern [business name]’s relationship with you in
                relation to this website. If you disagree with any part of these
                terms and conditions, please do not use our website.
              </Text>
              <Text style={styles.tcP}>
                The term ‘[business name]’ or ‘us’ or ‘we’ refers to the owner
                of the website whose registered office is [address]. Our company
                registration number is [company registration number and place of
                registration]. The term ‘you’ refers to the user or viewer of
                our website.
              </Text>
              <Text style={styles.tcL}>
                {"\u2022"} The content of the pages of this website is for your
                general information and use only. It is subject to change
                without notice.
              </Text>
              <Text style={styles.tcL}>
                {"\u2022"} This website uses cookies to monitor browsing
                preferences. If you do allow cookies to be used, the following
                personal information may be stored by us for use by third
                parties: [insert list of information].
              </Text>
              <Text style={styles.tcL}>
                {"\u2022"} Neither we nor any third parties provide any warranty
                or guarantee as to the accuracy, timeliness, performance,
                completeness or suitability of the information and materials
                found or offered on this website for any particular purpose. You
                acknowledge that such information and materials may contain
                inaccuracies or errors and we expressly exclude liability for
                any such inaccuracies or errors to the fullest extent permitted
                by law.
              </Text>
              <Text style={styles.tcL}>
                {"\u2022"} Your use of any information or materials on this
                website is entirely at your own risk, for which we shall not be
                liable. It shall be your own responsibility to ensure that any
                products, services or information available through this website
                meet your specific requirements.
              </Text>
              <Text style={styles.tcL}>
                {"\u2022"} This website contains material which is owned by or
                licensed to us. This material includes, but is not limited to,
                the design, layout, look, appearance and graphics. Reproduction
                is prohibited other than in accordance with the copyright
                notice, which forms part of these terms and conditions.
              </Text>
              <Text style={styles.tcL}>
                {"\u2022"} All trademarks reproduced in this website, which are
                not the property of, or licensed to the operator, are
                acknowledged on the website. Unauthorised use of this website
                may give rise to a claim for damages and/or be a criminal
                offence.
              </Text>
              <Text style={styles.tcL}>
                {"\u2022"} From time to time, this website may also include
                links to other websites. These links are provided for your
                convenience to provide further information. They do not signify
                that we endorse the website(s). We have no responsibility for
                the content of the linked website(s).
              </Text>
              <Text style={styles.tcL}>
                {"\u2022"} Your use of this website and any dispute arising out
                of such use of the website is subject to the laws of England,
                Northern Ireland, Scotland and Wales.
              </Text>
              <Text style={styles.tcP}>
                The use of this website is subject to the following terms of use
              </Text>
            </ScrollView>
            <View style={styles.containerk}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Eu aceito os Termos.</Text>
              </View>
            </View>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  containerk: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 10,
  },
  title: {
    fontSize: 22,
    alignSelf: "center",
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  tcP: {
    marginTop: 10,
    fontSize: 12,
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * 0.7,
  },

  button: {
    backgroundColor: "#136AC7",
    borderRadius: 5,
    padding: 10,
  },

  buttonDisabled: {
    backgroundColor: "#999",
    borderRadius: 5,
    padding: 10,
  },

  buttonLabel: {
    fontSize: 14,
    color: "#FFF",
    alignSelf: "center",
  },
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  root: {
    alignItems: "center",
    padding: 20,
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
  input_phone: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 60,
    margin: 1,
    padding: 1,
  },
});

const styles_button = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },
  container_SECONDARY: {
    borderColor: "#3B71F3",
    borderWidth: 2,
  },
  container_TERTIARY: {},
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_TERTIARY: {
    color: "white",
  },
  text_SECONDARY: {
    color: "blue",
  },
});
export default SignUpScreen;
