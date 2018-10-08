import * as React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { withFormik, FormikErrors, FormikProps } from 'formik';

const FormItem = Form.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}
class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { values, handleChange, handleBlur, handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
      >
        <div style={{ width: '400px' }}>
          <FormItem>
            <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />
          </FormItem>
          <FormItem>
            <Input
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          </FormItem>
          <FormItem>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <a href="">login now!</a>
          </FormItem>
        </div>
      </form>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
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
