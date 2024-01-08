import {
  createNotifier,
  NotificationGroup,
  defineNotificationComponent,
} from '@/libraries/notification'

export type NotificationSchema = {
  type: 'error' | 'warning' | 'success' | 'info'
  title: string
  text: string
  icon?: {
    class: string
    href: string
  }
}
export type UserNotification = NotificationSchema & {
  group?: 'top-left'
}
export const doNotify = createNotifier<NotificationSchema>()
export const notify = {
  error: (schema: Omit<UserNotification, 'type'>, timeout?: number) =>
    doNotify(
      {
        group: 'top-left',
        type: 'error',
        ...schema,
      },
      timeout || 3000,
    ),
  success: (schema: Omit<UserNotification, 'type'>, timeout?: number) =>
    doNotify(
      {
        group: 'top-left',
        type: 'success',
        ...schema,
      },
      timeout || 3000,
    ),
}
export const Notification = defineNotificationComponent<NotificationSchema>()
export { NotificationGroup }
