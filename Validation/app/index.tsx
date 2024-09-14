import React from "react";
import {
  Text,
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
const { height, width } = Dimensions.get("screen");
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
  .object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"], // This is where the error message will be attached
  });

type FormValues = z.infer<typeof formSchema>;
/* Note: 
This is the zod infer provided for TypeScript, it does this 
type FormValues = {
  email: string;
  password: string;
  confirm_password: string;
};
for the formSchema type
*/

export default function Index() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    Alert.alert("Successful", JSON.stringify(data));
  };

  return (
    <View style={styles.main}>
      <Text style={styles.maintext}>Signup</Text>

      <Controller
        control={control}
        name={"email"}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              placeholder="Email"
              style={styles.border}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {error && <Text style={styles.errorMessage}>{error.message}</Text>}
          </>
        )}
      />

      <Controller
        control={control}
        name={"password"}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              placeholder="Create Password"
              secureTextEntry
              style={styles.border}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {error && <Text style={styles.errorMessage}>{error.message}</Text>}
          </>
        )}
      />

      <Controller
        control={control}
        name={"confirm_password"}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry
              style={styles.border}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {error && <Text style={styles.errorMessage}>{error.message}</Text>}
          </>
        )}
      />

      <Pressable onPress={handleSubmit(onSubmit)} style={styles.loginbutton}>
        <Text style={styles.loginbuttontext}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  maintext: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#101010",
    marginBottom: 30,
  },
  border: {
    borderWidth: 1,
    borderColor: "#bbb",
    height: height * 0.045,
    width: width * 0.9,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  loginbuttontext: {
    fontSize: 20,
    color: "#fff",
  },
  loginbutton: {
    backgroundColor: "#4070F4",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  errorMessage: {
    color: "red",
  },
});
