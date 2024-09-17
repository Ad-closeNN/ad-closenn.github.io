---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/Ad-closeNN.png',
    name: 'Ad-closeNN',
    title: '创建者',
    links: [
      { icon: 'github', link: 'https://github.com/Ad-closeNN' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
        下面展示了我们团队的所有成员
        <br>
        你也看到了，这个团队就一个人
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>