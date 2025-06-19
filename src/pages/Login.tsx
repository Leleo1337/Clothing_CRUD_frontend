import { Loader2, Lock, Mail, Shirt } from 'lucide-react';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { toast } from 'react-toastify';

const defaultFormData = {
	email: '',
	password: '',
};

export default function Login() {
	const { login } = useContext(AuthContext);
	const [formData, setFormData] = useState(defaultFormData);
	const [loading, setLoading] = useState(false);

	function handleChange(e: any) {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	async function handleSubmit() {
		try {
			setLoading(true);
			await login(formData);
		} catch (error: any) {
			toast.error(error.response.data.msg);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<div className='absolute top-1/2 left-1/2 -translate-1/2 container max-w-[450px] p-8 bg-white shadow-xl rounded-md'>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<div className='bg-gray-700 p-3 text-white rounded-xl'>
						<Shirt size={36} />
					</div>
					<h1 className='text-gray-800 text-2xl sm:text-3xl font-semibold'>Bem vindo de volta!</h1>
					<p className='text-gray-600 text-sm sm:text-base '>Acesse o seu sistema de gerenciamento</p>
				</div>
				<div className='space-y-4 pt-4'>
					<div className='flex flex-col gap-1'>
						<label
							className='font-semibold text-gray-600 text-sm'
							htmlFor='email'
						>
							Email
						</label>
						<div className='relative'>
							<input
								type='text'
								name='email'
								id='email'
								autoComplete='off'
								className='w-full border border-gray-400 rounded-md pl-12 py-2'
								placeholder='seu@email.com'
								onChange={handleChange}
							/>
							<Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5' />
						</div>
					</div>
					<div className='flex flex-col gap-1'>
						<label
							className='font-semibold text-gray-600 text-sm'
							htmlFor='password'
						>
							senha
						</label>
						<div className='relative'>
							<input
								type='password'
								name='password'
								id='password'
								className='w-full border border-gray-400 rounded-md pl-12 py-2'
								placeholder='Digite sua senha'
								onChange={handleChange}
							/>
							<Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5' />
						</div>
					</div>
					<div>
						<div className='flex justify-between'>
							<div className='flex gap-2 items-center justify-center'>
								<input
									type='checkbox'
									name='remember'
									id='remember'
								/>
								<label
									htmlFor='remember'
									className='text-sm text-gray-600'
								>
									Lembrar-me
								</label>
							</div>
							<div>
								<a
									href='#'
									className='text-sm text-gray-800 font-semibold'
								>
									Esqueceu a senha?
								</a>
							</div>
						</div>
					</div>
					<div>
						<button
                     type='button'
							onClick={handleSubmit}
							className='flex items-center justify-center w-full bg-gray-700 text-white py-3 font-semibold rounded-md hover:bg-gray-800 cursor-pointer'
						>
							{loading ? <Loader2 className='animate-spin' /> : 'Entrar'}
						</button>
					</div>
					<div className='mt-4 border-t border-gray-300'>
						<div className='flex justify-center pt-4 text-sm'>
							<span className='text-gray-600'>
								Não tem uma conta?{' '}
								<a
									href='#'
									className='text-gray-800 font-semibold'
								>
									Solicitar acesso
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
