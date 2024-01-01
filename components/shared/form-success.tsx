import { FormAlertProps } from '@/types'
import { CheckCircledIcon } from '@radix-ui/react-icons'

export const FormSuccess = ({ message }: FormAlertProps) => {

    if (!message) return null

    return (
        <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-emerald-500 text-sm">
            <CheckCircledIcon className="w-4 h-4" />
            <p>
                {message}
            </p>
        </div>
    )
}