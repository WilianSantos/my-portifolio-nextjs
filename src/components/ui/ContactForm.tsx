'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

import { Button } from './Button'

// Validação com Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  tell: Yup.string().matches(
    /^\d{11}$/,
    'Celular deve ter 11 dígitos numéricos'
  ),
  email: Yup.string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
  message: Yup.string().required('A mensagem é obrigatória')
})

export function ContactForm() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="w-full p-6 rounded border-1 border-gray-200 shadow space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Entre em contato</h2>

      <Formik
        initialValues={{ name: '', email: '', message: '', tell: '' }}
        validationSchema={ContactSchema}
        onSubmit={async (values, { resetForm }) => {
          console.log('Formik values:', values)
          try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
            })

            if (!response.ok) {
              const data = await response.json()
              setError(data.error || 'Erro desconhecido')
              return
            }

            setSuccess(true)
            setError(null)
            resetForm()
          } catch (err) {
            setError(`Erro ao enviar o formulário: ${err}`)
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 flex flex-col items-start text-bule-400">
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex items-center flex-wrap justify-between gap-5 w-full">
              <div className="w-full">
                <Field
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  className="w-full p-2 border border-gray-200 rounded"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="w-full">
                <Field
                  type="tel"
                  name="tell"
                  placeholder="Seu telefone"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage
                  name="tell"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div className="w-full">
              <Field
                type="email"
                name="email"
                placeholder="Seu e-mail"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="w-full">
              <Field
                as="textarea"
                name="message"
                placeholder="Sua mensagem"
                rows={5}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <Button type="submit" isGreen>
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </Button>
            </div>

            {success && (
              <p className="text-green-600 text-sm mt-2">
                Mensagem enviada com sucesso!
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}
