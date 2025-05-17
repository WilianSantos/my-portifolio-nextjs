// components/ContactForm.tsx
'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

// Validação com Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
  message: Yup.string().required('A mensagem é obrigatória')
})

export function ContactForm() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="w-full p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Entre em contato</h2>

      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={async (values, { resetForm }) => {
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
            setError('Erro ao enviar o formulário')
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 flex flex-col items-end">
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            <div className="w-full">
              <Field
                type="text"
                name="name"
                placeholder="Seu nome"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 w-1/2 cursor-pointer bg-blue-950 text-white rounded hover:bg-blue-900 disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>

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
