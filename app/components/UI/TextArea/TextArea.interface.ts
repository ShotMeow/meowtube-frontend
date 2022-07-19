import { TextareaHTMLAttributes } from 'react'

import { IFieldProps } from '@/components/UI/Field/Field.interface'

type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps

export interface ITextArea extends TypeInputPropsField {}
