import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const ButtonToggleLanguage = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
    };
    return (
        <Button
            className="uppercase fixed top-5 right-5 bg-button"
            onClick={toggleLanguage}
        >
            {currentLanguage}
        </Button>
    );
};

export default ButtonToggleLanguage;
