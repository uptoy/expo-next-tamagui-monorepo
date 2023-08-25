import { useLink } from 'solito/link'

import { Clock } from './Clock'
import { SheetDemo } from './sheet'
import { Anchor, Button, H1, Paragraph, Separator, Text, XStack, YStack } from '@my/ui'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      aaaaaaaaaaaaa
    </YStack>
  )
}
