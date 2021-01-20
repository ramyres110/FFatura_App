import * as Yup from 'yup';

export const RegisterSchema = Yup.object()
    .shape({
        passwordCheck: Yup.string().required('Repita a senha para Confirmação de Senha'),
        password: Yup.string().required('Informe uma senha!'),
        phone: Yup.string().min(10, 'Informe o número com DDD').required('Required'),
        email: Yup.string().email('Informe um Email válido!').required('Informe seu email!'),
        name: Yup.string().required('Informe o Nome Completo!'),
    }, []);

export const ProfileSchema = Yup.object()
    .shape({
        phone: Yup.string().min(10, 'Informe o número com DDD').required('Required'),
        email: Yup.string().email('Informe um Email válido!').required('Informe seu email!'),
        name: Yup.string().required('Informe o Nome Completo!'),
    }, []);

export const GroupSchema = Yup.object()
    .shape({
        commission: Yup.number('Comissão deve ser um número!')
            .min(0, 'A Porcentagem da Comissão não pode ser meno que 0!')
            .max(100, 'A Porcentagem da Comissão não pode ser maior que 100!')
            .required('Informe a Porcentagem da Comissão!'),
        name: Yup.string().required('Informe o Nome!'),
    }, []);

export const GoalSchema = Yup.object().shape({
    dtEnd: Yup.string(),
    dtInit: Yup.string(),
    profit: Yup.number().min(0, 'Informe o valor para Lucro Total!').required('Informe o Lucro!'),
    sales: Yup.number().min(0, 'Informe o valor para Total Vendas!').required('Informe o Total Vendas!'),
    incomes: Yup.number().min(0, 'Informe o valor para Faturamento Total!').required('Informe o Faturamento Total!'),
    name: Yup.string().required('Informe o Nome!'),
});

export const ClientSchema = Yup.object().shape({
    name: Yup.string().required('Informe o Nome!'),
});

export const ProductSchema = Yup.object()
    .shape({
        productCode: Yup.number('Informe o código do produto!').required('Informe o código do produto!'),
        productDescription: Yup.string('Informe a descrição do produto!').required('Informe a descrição do produto!')
    }, []);

export const IncomeSchema = Yup.object().shape({});

export default {};