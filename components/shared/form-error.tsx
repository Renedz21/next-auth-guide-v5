import { FormAlertProps } from '@/types'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export const FormError = ({ message }: FormAlertProps) => {

    if (!message) return null

    return (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-destructive text-sm">
            <ExclamationTriangleIcon className="w-4 h-4" />
            <p>
                {message}
            </p>
        </div>
    )
}