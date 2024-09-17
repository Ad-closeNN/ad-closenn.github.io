# 使 GitHub Desktop 提交时有 Verified 标签
> 当你在 GitHub 网页端提交 Commit 的时候，GitHub 会自动帮你生成一个 [GPG 签名](https://zh.wikipedia.org/wiki/GnuPG)，并在提交旁边显示一个 <badge type="tip" text="Verified"/> 标签，表示这个提交是本人所为的。如果使用的是 [GitHub Desktop](https://desktop.github.com) 或一些类似于 [Git](https://git-scm.com) 的工具，那么这个标签在 Commit 的时候没有带上提交者本人的 GPG 签名，这个标签就会显示为空白，代表**未验证**。这里介绍的是如何让 GitHub Desktop 提交时带上 GPG 签名，从而在提交记录旁边显示 <badge type="tip" text="Verified"/> 标签。

### 准备工具
- [Git](https://git-scm.com) 或 [GunPG](https://gnupg.org) 或 [GPG4Win](https://www.gpg4win.org)
- [GitHub Desktop](https://desktop.github.com)

:::tip
[Git](https://git-scm.com) 内包含 [GunPG](https://gnupg.org)， [GPG4Win](https://www.gpg4win.org) 内也包含 [GunPG](https://gnupg.org) ，两者安装任意一个即可。

只是 [Git](https://git-scm.com) 和 [GunPG](https://gnupg.org) 都是命令行程序，需要手动输入命令，而 [GPG4Win](https://www.gpg4win.org) 是图形化界面程序，使用起来更方便。

:::

:::details [GPG4Win](https://www.gpg4win.org) 下载步骤
1. 打开 [GPG4Win](https://www.gpg4win.org) 官网
2. 点击![Download Gpg4win](pic/Download%20Gpg4win.png)
3. 有能力请**赞助**作者，若不想赞助也可以点击 <badge type="tip" text="$0"/> 后点击 <badge type="tip" text="Download"/> 进行下载![$0 Download.png](pic/$0%20Download.png)
:::

## 以 **GPG4Win** 为例
### 生成密钥
打开由 [GPG4Win](https://www.gpg4win.org) 安装后自带的 Kleopatra，可以在开始菜单找到如图程序。
![Kleopatra on start](pic/Kleopatra%20on%20start.png)
点击打开 Kleopatra，在顶栏找到并点击 <badge type="info" text="文件"/> <badge type="info" text="新建 OpenPGP 密钥对...."/>。

在如图所示的窗口内， <badge type="tip" text="名字"/> 填写的是你的 GitHub 用户名（**不是昵称**）， <badge type="tip" text="电子邮件地址"/> 填写的是你 GitHub 账户目前绑定的邮箱。填写完毕后，可以点击 <badge type="tip" text="高级设置"/> 选择一些其他功能，在这里不多赘述。最终的情况一般如下图所示（高级设置内的选项仅供参考，请以实际为准）。

![Create PGP](pic/Create%20PGP.png)

### 上传公共密钥
在 [GPG4Win](https://www.gpg4win.org) 主界面内右键选择用户，然后点击 <badge type="tip" text="导出"/>，将密钥保存到本地。![Export Public](pic/Export%20Public.png)
找到刚刚导出的密钥文件，使用文本编辑工具（比如记事本）打开并复制全部内容。复制的内容应为如下格式。
```.asc
-----BEGIN PGP PUBLIC KEY BLOCK-----
//公钥部分，实际应为一大串字母
-----END PGP PUBLIC KEY BLOCK-----
```
:::warning
接下来的步骤需要登录你的 [GitHub](https://github.com) 账号，并确保你的邮箱是已验证的状态。
:::
打开 [GitHub GPG 密钥创建页面](https://github.com/settings/gpg/new) ，填写 <badge type="tip" text="Title"/>(标题) ，并将刚刚复制的公钥粘贴到 <badge type="tip" text="Key"/> 栏内，确认无误后点击 <badge type="tip" text="Add GPG key"/> 即可。

### 配置 .gitconfig 文件
:::warning
请确保你的电脑中安装有 [GitHub Desktop](https://desktop.github.com) ，并且已经登录了你的 [GitHub](https://github.com) 账号。
:::
打开文件 `C:\Users\你的用户名\.gitconfig`，其中 `你的用户名` 需替换成你当前登录到的用户。打开 `.gitconfig` 并添加如下内容。

在 `[user]` 中添加 `signingkey = ` Key ID 后16位。其中 `Key ID 后16位` 需替换成你刚刚在 [GitHub GPG Keys 页面](https://github.com/settings/keys) 上添加的公钥的 Key ID 后16位，如 `A71099846BA37D4C` 。如图所示。
![Key ID](pic/Key%20ID.png)

然后添加 
```.gitconfig
[commit]
	gpgsign = true
```
最终 `.gitconfig` 文件内容如下。 
<badge type="danger" text="内容仅供参考"/>
<badge type="danger" text="内容仅供参考"/>
<badge type="danger" text="内容仅供参考"/>

```.gitconfig
[user]
	name = Ad-closeNN
	email = 1709***095@qq.com
	signingkey = A71099846BA37D4C
[init]
	defaultBranch = main
[commit]
	gpgsign = true
```
:::danger
每个人的 `.gitconfig` 文件内容可能不同，这里给出的是参考内容，请以实际为准（尽量只增不删）。

如果 `.gitconfig` 文件不存在，请自行创建。格式供参考，建议使用 [GitHub Desktop](https://desktop.github.com) 或 [Git](https://git-scm.com) 进行生成 `.gitconfig` 。

```.gitconfig
[user]
	name = <用户名>
	email = <电子邮箱地址>
	signingkey = <公钥 ID 后16位>
[commit]
	gpgsign = true
```
:::