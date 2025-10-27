import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import Icon from '@components/icons'
import { sendEmail } from '@utils/emailService'
import { trackFormSubmission } from '@utils/analytics'
import { useReducedMotion } from '@hooks/useReducedMotion'
import { fadeInUp, hoverScale, tapScale } from '@utils/animations'

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className }: ContactFormProps) {
  const prefersReducedMotion = useReducedMotion()
  const [submitState, setSubmitState] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState('loading')
    setSubmitMessage('')

    try {
      const result = await sendEmail(data)

      if (result.success) {
        setSubmitState('success')
        setSubmitMessage(result.message)
        trackFormSubmission('contact_form', true)
        reset()

        setTimeout(() => {
          setSubmitState('idle')
          setSubmitMessage('')
        }, 5000)
      } else {
        setSubmitState('error')
        setSubmitMessage(result.message)
        trackFormSubmission('contact_form', false)
      }
    } catch (error) {
      setSubmitState('error')
      setSubmitMessage('An unexpected error occurred. Please try again.')
      trackFormSubmission('contact_form', false)
      console.error('Form submission error:', error)
    }
  }

  const formClasses = ['contact-form', className].filter(Boolean).join(' ')

  return (
    <motion.form
      className={formClasses}
      onSubmit={handleSubmit(onSubmit)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
    >
      <div className="contact-form__field">
        <label htmlFor="name" className="contact-form__label">
          Name <span className="contact-form__required">*</span>
        </label>
        <input
          id="name"
          type="text"
          className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
          placeholder="Your name"
          disabled={submitState === 'loading'}
          {...register('name')}
        />
        {errors.name && (
          <motion.span
            className="contact-form__error"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            <Icon name="alert" className="contact-form__error-icon" />
            {errors.name.message}
          </motion.span>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="email" className="contact-form__label">
          Email <span className="contact-form__required">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
          placeholder="your.email@example.com"
          disabled={submitState === 'loading'}
          {...register('email')}
        />
        {errors.email && (
          <motion.span
            className="contact-form__error"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            <Icon name="alert" className="contact-form__error-icon" />
            {errors.email.message}
          </motion.span>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="message" className="contact-form__label">
          Message <span className="contact-form__required">*</span>
        </label>
        <textarea
          id="message"
          className={`contact-form__input contact-form__textarea ${errors.message ? 'contact-form__input--error' : ''}`}
          placeholder="Tell me about your project or just say hi..."
          rows={5}
          disabled={submitState === 'loading'}
          {...register('message')}
        />
        {errors.message && (
          <motion.span
            className="contact-form__error"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            <Icon name="alert" className="contact-form__error-icon" />
            {errors.message.message}
          </motion.span>
        )}
      </div>

      {submitMessage && (
        <motion.div
          className={`contact-form__message contact-form__message--${submitState}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <Icon
            name={submitState === 'success' ? 'check' : 'alert'}
            className="contact-form__message-icon"
          />
          {submitMessage}
        </motion.div>
      )}

      <motion.button
        type="submit"
        className="contact-form__submit"
        disabled={submitState === 'loading'}
        whileHover={prefersReducedMotion ? undefined : hoverScale}
        whileTap={prefersReducedMotion ? undefined : tapScale}
      >
        {submitState === 'loading' ? (
          <>
            <span className="contact-form__spinner" />
            Sending...
          </>
        ) : (
          <>
            <Icon name="send" className="contact-form__submit-icon" />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  )
}
