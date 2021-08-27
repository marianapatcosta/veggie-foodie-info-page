import React, { useState } from "react"
import PropTypes from "prop-types"
import { useForm } from "react-hook-form"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { StyledSectionTitle } from "../../../themes/global-style"
import { Input, Textarea, Toast } from "../.."
import * as Icons from "../../../icons"
import { TOAST_TYPES } from "../../../constants"
import {
  StyledContacts,
  StyledContactsContent,
  StyledForm,
  StyledTitle,
  StyledFormItems,
  StyledFormItem,
  StyledButton,
} from "./styles"

const Contacts = () => {
  const [toastInfo, setToastInfo] = useState({
    message: "",
    type: "",
  })
  const { t } = useTranslation()

  return (
    <StyledContacts id="contacts">
      <StyledSectionTitle>{t("contacts")}</StyledSectionTitle>
      <StyledContactsContent>
        <ContactForm setToastInfo={setToastInfo} />
      </StyledContactsContent>
      {toastInfo && toastInfo.message && (
        <Toast {...toastInfo} onClear={setToastInfo} />
      )}
    </StyledContacts>
  )
}

const ContactForm = ({ setToastInfo }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm()
  const { t } = useTranslation()

  const onSubmit = async data => {
    console.log(
      process.env.GATSBY_SERVICE_ID,
      process.env.GATSBY_TEMPLATE_ID,
      process.env.GATSBY_USER_ID
    )
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }
      console.log(
        4444,
        templateParams,
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        process.env.GATSBY_USER_ID
      )

      const emailjs = await import("emailjs-com")
      await emailjs.send(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        templateParams,
        process.env.GATSBY_USER_ID
      )
      console.log(111111)
      setToastInfo({
        message: t("sendEmailSuccess"),
        type: TOAST_TYPES.SUCCESS,
      })
      reset()
    } catch (error) {
      console.log({ error })
      setToastInfo({
        message: t("sendEmailError"),
        type: TOAST_TYPES.ALERT,
      })
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      <StyledTitle>{t("contactsMessage")}</StyledTitle>
      <StyledFormItems>
        <StyledFormItem>
          <Input
            id="name"
            {...register("name", {
              required: { value: true, message: t("nameRequiredMessage") },
              maxLength: {
                value: 30,
                message: t("nameErrorMessage"),
              },
            })}
            placeholder={t("name")}
            errorText={errors.name?.message}
            icon={Icons.User}
            setValue={setValue}
          />
        </StyledFormItem>
        <StyledFormItem>
          <Input
            id="email"
            {...register("email", {
              required: { value: true, message: t("emailRequiredMessage") },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: t("emailErrorMessage"),
              },
            })}
            placeholder={t("email")}
            errorText={errors.email?.message}
            icon={Icons.Email}
          />
        </StyledFormItem>
      </StyledFormItems>
      <StyledFormItem>
        <Input
          id="subject"
          {...register("subject", {
            required: { value: true, message: t("subjectRequiredMessage") },
            maxLength: {
              value: 75,
              message: t("subjectErrorMessage"),
            },
          })}
          placeholder={t("subject")}
          errorText={errors.subject?.message}
          icon={Icons.Target}
        />
      </StyledFormItem>
      <StyledFormItem>
        <Textarea
          id="message"
          {...register("message", {
            required: { value: true, message: t("messageRequiredMessage") },
          })}
          placeholder={t("message")}
          errorText={errors.message?.message}
        />
      </StyledFormItem>
      <StyledButton type="submit" label={t("send")} icon={Icons.Send} />
    </StyledForm>
  )
}

ContactForm.propTypes = {
  setToastInfo: PropTypes.func,
}

ContactForm.defaultProps = {
  setToastInfo: () => null,
}

Contacts.propTypes = {
  contactsInfo: PropTypes.array,
}

Contacts.defaultProps = {
  contactsInfo: [],
}

export default Contacts
