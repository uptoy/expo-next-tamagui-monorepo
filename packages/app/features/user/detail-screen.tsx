import { createParam } from 'solito'
import { useLink } from 'solito/link'
import { ChevronLeft } from '@tamagui/lucide-icons'

import { Button, Paragraph, YStack } from '@my/ui'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="700">{`User ID: ${id}`}</Paragraph>
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}