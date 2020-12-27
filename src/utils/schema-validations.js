import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
    passwordCheck: Yup.string().required('Repita a senha para Confirmação de Senha'),
    password: Yup.string().required('Informe uma senha!'),
    phone: Yup.string().min(10, 'Informe o número com DDD').required('Required'),
    email: Yup.string().email('Informe um Email válido!').required('Informe seu email!'),
    name: Yup.string().required('Informe o Nome Completo!'),
}, [])

export default {};