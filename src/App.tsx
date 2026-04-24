import { Badge, Button, Card, Container, Group, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { IconBrandInstagram, IconDeviceTv, IconMusic, IconPhoto } from '@tabler/icons-react'

const highlights = [
  {
    icon: IconMusic,
    title: 'Discography timeline',
    description: 'Map solo releases, features, OST work, and standout live stages in one clean timeline.',
  },
  {
    icon: IconPhoto,
    title: 'Visual archive',
    description: 'Collect eras, photoshoots, teasers, and performance styling references in curated galleries.',
  },
  {
    icon: IconDeviceTv,
    title: 'Stage index',
    description: 'Track fancams, award-show stages, variety appearances, and favorite performance moments.',
  },
  {
    icon: IconBrandInstagram,
    title: 'Fan-made notes',
    description: 'Leave space for essays, highlights, favorite quotes, and future portfolio sections.',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <Container size="lg" className="px-6 py-12 md:py-20">
        <Stack gap="xl">
          <Badge variant="light" color="pink" className="w-fit">
            Fan-made portfolio starter
          </Badge>

          <Stack gap="md" maw={720}>
            <Title order={1} className="text-4xl font-semibold tracking-tight md:text-6xl">
              Seulgi Archive
            </Title>
            <Text size="lg" c="dimmed" className="max-w-2xl leading-8">
              A Vite + React + TypeScript starter for building a polished fan-made portfolio dedicated to
              Kang Seulgi — ready for editorial sections, media archives, timelines, and performance notes.
            </Text>
            <Group>
              <Button color="pink" size="md" radius="xl">
                Start building sections
              </Button>
              <Button variant="default" size="md" radius="xl">
                Plan content structure
              </Button>
            </Group>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" verticalSpacing="lg">
            {highlights.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                radius="xl"
                padding="xl"
                className="border border-white/10 bg-white/5 backdrop-blur"
              >
                <Stack gap="md">
                  <ThemeIcon size={44} radius="xl" color="pink" variant="light">
                    <Icon size={22} />
                  </ThemeIcon>
                  <div>
                    <Title order={3} className="mb-2 text-xl">
                      {title}
                    </Title>
                    <Text c="dimmed" className="leading-7">
                      {description}
                    </Text>
                  </div>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </main>
  )
}

export default App
