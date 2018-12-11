import * as React from 'react';
import { withFormik, FormikErrors, FormikProps, Field } from 'formik';
import { validUserSchema } from '@abb/common';
import { InputField } from '../../shared/InputField';
import { View, Button } from 'react-native';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}
class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    const {} = this.props;
    return (
      <View>
        <Field name="email" placeholder="Email" component={InputField} />
        <Field
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          component={InputField}
        />
        <Button title="submit" onPress={handleSubmit as any} />
      </View>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
