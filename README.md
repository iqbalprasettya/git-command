# Github Command

## Setup

```sh
git config --global user.name "[nama]"
```

Mengatur nama yang ingin ditautkan pada transaksi commit Anda

```sh
git config --global user.email "[alamat surel]"
```

Mengatur alamat surel yang ingin ditautkan pada transaksi commit Anda

## Create Repository

Buat folder, lalu buat repositori Git baru dengan cara menjalankan command ini bara terminal.

```sh
git init
```

Jika ingin membuat salinan dari repositori yang sudah ada, gunakan git clone.

```sh
# Untuk menyalin local repository
git clone /path/to/repository
# Untuk menyalin remote repository
git clone username@host:/path/to/repository
```

## Workflow 

Di Git, terdapat tiga bagian yang disebut “trees”.
- Working Directory: Tempat menyimpan file kerja
- Index/Stage: Pengolah data
- HEAD: Mengarah pada commit terakhir.

Setelah menyelesaikan perubahan pada working directory, tambahkan perubahan Anda ke index/stage.

```sh
# Menambahkan perubahan pada file yang dituju
git add <nama-file>
# Menambahkan perubahan pada seluruh file pada folder saat ini
git add *
# Membatalkan penambahan pada file yang dituju
git rm <nama-file>
```

Setelah itu, lakukan commit pada perubahan yang telah ditambahkan.

```sh
git commit -m "Pesan commit yang bermakna"
```

Untuk melihat file yang belum Anda add atau commit, jalankan:

```sh
git status
```

## Pushing Changes

Setelah melakukan commit, perubahan Anda sekarang berada di HEAD. Untuk mengirimnya ke remote repository Anda, jalankan:

```sh
git push origin <nama-branch>
# Secara default, nama branch utama adalah "master"
```

Jika Anda tidak menyalin repositori yang sudah ada, hubungkan repositori Anda pada remote server.

```sh
git remote add origin <server>
```

## Branching

Saat membuat fitur baru, gunakan branch baru untuk memisahkan hasil pekerjaan yang sudah ada dengan pekerjaan yang sedang dikembangkan. Branch “master” adalah branch bawaan saat membuat repositori. Buat branch baru lalu gabungkan kembali ke branch master setelah selesai menambahkan fitur.

Buat branch baru dan pindah ke branch tersebut

```sh
git checkout -b <nama-branch>
# Jika ingin membuat branch baru dan tetap berada di branch yang sama
git branch feature_x
```

Push branch yang baru kamu buat untuk menyimpannya pada remote repository.

```sh
git push origin <nama-branch>
```
Untuk pindah branch, jalankan:

```sh
git checkout master
```

Untuk menghapus branch, jalankan:

```sh
git branch -d <nama-branch>
```

Untuk melihat branch yang ada, jalankan:
```sh
git branch
# Branch saat ini ditandai dengan warna hijau dan tanda bintang.
```

## Update & Merge

Untuk memperbarui local repository Anda ke commit terbaru, jalankan:

```sh
git pull
```

Untuk menggabungkan branch lain ke branch saat ini, jalankan:

```sh
git merge <branch>
```

Anda juga dapat menggabungkan branch dengan cara git rebase. Command ini akan menerapkan commit pada branch yang akan digabungkan satu per satu secara berurutan.

```sh
git rebash master
git rebash master feature_branch
```

Saat melakukan pull atau merge, Git akan menggabungkan perubahan yang ada. Namun, terkadang terjadi konflik pada file yang mengalami perubahan. Anda perlu menggabungkan atau menyelesaikan konflik tersebut secara manual. Setelah itu, lakukan git add untuk menambahkan penyelesaian konflik yang telah Anda lakukan ke index/stage.

Sebelum melakukan penggabungan, Anda dapat melihat pratinjau perubahan yang ada pada kedua branch dengan cara:

```sh
git diff <source_branch> <target_branch>
```

## History

Untuk melihat daftar commit yang ada, jalankan:

```sh
git log
```

Command ini juga menampilkan hash commit yang dapat anda gunakan untuk membatalkan commit.

## Undoing things

Jika Anda melakukan kesalahan pada commit yang dilakukan di local, Anda dapat membatalkan commit tersebut dengan git reset.

```sh
# Membatalkan commit dan tetap mempertahankan perubahan yang ada
git reset --soft HEAD^
# Membatalkan commit dan mengembalikan kondisi file pada saat commit terakhir
git reset --hard HEAD^
# Membatalkan commit yang diinginkan
git reset <hash-commit>
```
Jika Anda sudah mem-push branch Anda dan sudah di-pull orang lain, maka Anda bisa melakukan git revert.

```sh
# Membuat commit baru yang mengembalikan perubahan yang dilakukan pada commit terakhir
git revert HEAD
```

Jika Anda belum melakukan commit, dan ingin mengembalikan kondisi file pada saat commit terakhir, Anda dapat menggunakan git checkout.

```sh
# Mengembalikan kondisi file pada saat commit terakhir
git checkout -- <nama-file>
```
## Stash & Clean 

Jika Anda ingin berpindah branch tetapi masih ada file yang belum di-commit karena belum selesai misalnya), anda dapat menyimpan perubahan yang Anda buat dan membuat folder kerja Anda bersih.

```sh
# Menyimpan perubahan folder kerja Anda
git stash
# Menerapkan perubahan yang baru saja disimpan
git stash apply
```

Jika Anda ingin menghilangkan perubahan yang belum anda tambahkan pada stage dan membuat folder Anda bersih, jalankan:

```sh
# Membersihkan folder kerja Anda dari untracked files
git clean
````
