import { Form, Input, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import useLogin from '../../hook/useLogin';

type valueSubmit = {
    username: string;
};

const LoginPage = () => {
    const { t } = useTranslation();
    const { onLogin, isLoading } = useLogin();
    const onFinish = async (values: valueSubmit) => {
        const { username } = values;
        if (username) await onLogin(username);
    };
    return (
        <section className="min-w-screen min-h-screen bg-background flex flex-col justify-center items-center">
            <h1 className="text-[32px] leading-10">{t('loginPage.title')}</h1>
            {isLoading && <p>Loading...</p>}
            <Form name="simple_form" onFinish={onFinish} layout="vertical">
                <Form.Item
                    label={t('loginPage.label')}
                    name="username"
                    rules={[
                        { required: true, message: 'Please input something!' },
                    ]}
                >
                    <Input
                        placeholder={t('loginPage.placeholder')}
                        className="rounded"
                    />
                </Form.Item>

                <Form.Item className="flex justify-center">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-button rounded text-black"
                    >
                        {t('loginPage.button')}
                    </Button>
                </Form.Item>
            </Form>
        </section>
    );
};

export default LoginPage;
