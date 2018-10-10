import * as React from 'react';
import { Form as AntForm, Icon, Button } from 'antd';
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { validUserSchema } from '@abb/common';
import { InputField } from '../shared/InputField';

const FormItem = AntForm.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}
class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const {} = this.props;
    return (
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '2rem',
          width: '400px',
          margin: 'auto',
          textAlign: 'center'
        }}
      >
        <Field
          name="email"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
          component={InputField}
        />
        <Field
          name="password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Password"
          component={InputField}
        />
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        <FormItem>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>{' '}
          or <a href="">login</a>
        </FormItem>
      </Form>
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
