function _0x1f7b(){const _0x309eca=['./config.js','2666448EMuUxh','64313CDfrkI','ready','1687210IdQFQN','925RuzAxv','log','2030DlgxWJ','GuildMembers','5570560LKyMOp','138654VwKeQf','user','discord.js','49500yTWXyX','8zmGqfE','4649911xgqlGo','\x0a\x20\x20\x20\x20\x20█████╗\x20██╗\x20\x20\x20\x20\x20\x20\x20█████╗\x20███╗\x20\x20\x20██╗██████╗\x20\x20█████╗\x20██████╗\x20██╗\x0a\x20\x20\x20\x20██╔══██╗██║\x20\x20\x20\x20\x20\x20██╔══██╗████╗\x20\x20██║██╔══██╗██╔══██╗██╔══██╗██║\x0a\x20\x20\x20\x20███████║██║█████╗███████║██╔██╗\x20██║██████╔╝███████║██████╔╝██║\x0a\x20\x20\x20\x20██╔══██║██║╚════╝██╔══██║██║╚██╗██║██╔══██╗██╔══██║██╔══██╗██║\x0a\x20\x20\x20\x20██║\x20\x20██║███████╗\x20██║\x20\x20██║██║\x20╚████║██████╔╝██║\x20\x20██║██║\x20\x20██║██║\x0a\x20\x20\x20\x20╚═╝\x20\x20╚═╝╚══════╝\x20╚═╝\x20\x20╚═╝╚═╝\x20\x20╚═══╝╚═════╝\x20╚═╝\x20\x20╚═╝╚═╝\x20\x20╚═╝╚═╝\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Thank\x20you\x20for\x20trusting\x20Ali\x20Al-Anbari\x20and\x20A10\x20Store.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discord.gg/a10\x20\x20\x20/\x20\x0a'];_0x1f7b=function(){return _0x309eca;};return _0x1f7b();}function _0x2246(_0x2cf2e9,_0x479e45){const _0x1f7bbe=_0x1f7b();return _0x2246=function(_0x22465d,_0x1d8950){_0x22465d=_0x22465d-0x82;let _0x15f2ef=_0x1f7bbe[_0x22465d];return _0x15f2ef;},_0x2246(_0x2cf2e9,_0x479e45);}const _0x3e5f72=_0x2246;(function(_0x203492,_0x352002){const _0x2f162c=_0x2246,_0x71442c=_0x203492();while(!![]){try{const _0x4b193e=-parseInt(_0x2f162c(0x91))/0x1+parseInt(_0x2f162c(0x82))/0x2+parseInt(_0x2f162c(0x90))/0x3+parseInt(_0x2f162c(0x87))/0x4+-parseInt(_0x2f162c(0x83))/0x5*(-parseInt(_0x2f162c(0x8b))/0x6)+-parseInt(_0x2f162c(0x8d))/0x7*(parseInt(_0x2f162c(0x8c))/0x8)+-parseInt(_0x2f162c(0x88))/0x9*(parseInt(_0x2f162c(0x85))/0xa);if(_0x4b193e===_0x352002)break;else _0x71442c['push'](_0x71442c['shift']());}catch(_0xb1bdca){_0x71442c['push'](_0x71442c['shift']());}}}(_0x1f7b,0xc22ab));const {Client,GatewayIntentBits,EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle,ModalBuilder,TextInputBuilder,TextInputStyle}=require(_0x3e5f72(0x8a)),config=require(_0x3e5f72(0x8f)),client=new Client({'intents':[GatewayIntentBits['Guilds'],GatewayIntentBits['GuildMessages'],GatewayIntentBits[_0x3e5f72(0x86)]]});client['on'](_0x3e5f72(0x92),async()=>{const _0x5648e9=_0x3e5f72;console[_0x5648e9(0x84)]('Logged\x20in\x20as\x20'+client[_0x5648e9(0x89)]['tag']+_0x5648e9(0x8e));

  const channel = client.channels.cache.get(config.channels.applicationChannel);
  if (channel) {
    const embed = new EmbedBuilder()
      .setTitle('التقديم على الإدارة')
      .setDescription('اضغط على الزر أدناه للتقديم')
      .setColor('#0099ff')
      .setThumbnail(config.images.thumbnail)
      .setImage(config.images.banner);

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('apply')
          .setLabel('تقديم')
          .setStyle(ButtonStyle.Primary)
      );

    await channel.send({ embeds: [embed], components: [row] });
  }
});

client.on('interactionCreate', async interaction => {
  if (interaction.isButton()) {
    if (interaction.customId === 'apply') {
      // Check if user has banned role
      if (interaction.member.roles.cache.has(config.roles.banned)) {
        return interaction.reply({ 
          content: 'عذراً، لا يمكنك التقديم حالياً', 
          ephemeral: true 
        });
      }

      const modal = new ModalBuilder()
        .setCustomId('application_modal')
        .setTitle('نموذج التقديم');

      const nameInput = new TextInputBuilder()
        .setCustomId('name')
        .setLabel('ما اسمك؟')
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

      const ageInput = new TextInputBuilder()
        .setCustomId('age')
        .setLabel('كم عمرك؟')
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

      const idInput = new TextInputBuilder()
        .setCustomId('discord_id')
        .setLabel('ما هو الايدي الخاص بك؟')
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

      const experienceInput = new TextInputBuilder()
        .setCustomId('experience')
        .setLabel('ما هي خبراتك؟')
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);

      modal.addComponents(
        new ActionRowBuilder().addComponents(nameInput),
        new ActionRowBuilder().addComponents(ageInput),
        new ActionRowBuilder().addComponents(idInput),
        new ActionRowBuilder().addComponents(experienceInput)
      );

      await interaction.showModal(modal);
    }

    if (interaction.customId === 'accept' && interaction.member.roles.cache.has(config.roles.staff)) {
      const userId = interaction.message.embeds[0].footer.text;
      const member = await interaction.guild.members.fetch(userId);
      
      await member.roles.add(config.roles.accepted);
      
      const acceptEmbed = new EmbedBuilder()
        .setTitle('تم قبول تقديمك!')
        .setDescription('مرحباً بك في الفريق')
        .setColor('#00ff00')
        .setThumbnail(config.images.thumbnail)
        .setImage(config.images.banner);

      const acceptRow = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setLabel('انتظار مقابلة')
            .setURL(config.interviewServer)
            .setStyle(ButtonStyle.Link)
        );

      const channel = client.channels.cache.get(config.channels.acceptedChannel);
      await channel.send({ content: `<@${userId}>`, embeds: [acceptEmbed], components: [acceptRow] });
      
      await interaction.message.edit({
        components: [
          new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('accepted_by')
                .setLabel(`تم القبول بواسطة ${interaction.user.tag}`)
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
            )
        ]
      });
    }

    if (interaction.customId === 'reject' && interaction.member.roles.cache.has(config.roles.staff)) {
      const userId = interaction.message.embeds[0].footer.text;
      const member = await interaction.guild.members.fetch(userId);
      
      await member.roles.add(config.roles.rejected);
      
      await interaction.message.edit({
        components: [
          new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('rejected_by')
                .setLabel(`تم الرفض بواسطة ${interaction.user.tag}`)
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
            )
        ]
      });
    }

    if (interaction.customId === 'ban' && interaction.member.roles.cache.has(config.roles.staff)) {
      const userId = interaction.message.embeds[0].footer.text;
      const member = await interaction.guild.members.fetch(userId);
      
      await member.roles.add(config.roles.banned);
      
      const banEmbed = new EmbedBuilder()
        .setTitle('حظر من التقديم')
        .setDescription(`تم حظر <@${userId}> من التقديم بواسطة <@${interaction.user.id}>`)
        .setColor('#ff0000')
        .setThumbnail(config.images.thumbnail)
        .setImage(config.images.banner);

      const banRow = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId(`unban_${userId}`)
            .setLabel('إلغاء الحظر')
            .setStyle(ButtonStyle.Danger)
        );

      const banLogChannel = client.channels.cache.get(config.channels.banLogChannel);
      await banLogChannel.send({ embeds: [banEmbed], components: [banRow] });
      
      await interaction.message.edit({
        components: [
          new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('banned_by')
                .setLabel(`تم الحظر بواسطة ${interaction.user.tag}`)
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
            )
        ]
      });
    }

    if (interaction.customId.startsWith('unban_') && interaction.member.roles.cache.has(config.roles.staff)) {
      const userId = interaction.customId.split('_')[1];
      const member = await interaction.guild.members.fetch(userId);
      
      await member.roles.remove(config.roles.banned);
      await member.send('تم إلغاء الحظر عنك. يمكنك التقديم مرة أخرى.');
      
      await interaction.message.edit({ components: [] });
      await interaction.reply({ content: 'تم إلغاء الحظر بنجاح', ephemeral: true });
    }
  }

  if (interaction.isModalSubmit() && interaction.customId === 'application_modal') {
    const name = interaction.fields.getTextInputValue('name');
    const age = interaction.fields.getTextInputValue('age');
    const discordId = interaction.fields.getTextInputValue('discord_id');
    const experience = interaction.fields.getTextInputValue('experience');

    const applicationEmbed = new EmbedBuilder()
      .setTitle('طلب تقديم جديد')
      .setColor('#0099ff')
      .setThumbnail(config.images.thumbnail)
      .setImage(config.images.banner)
      .addFields(
        { name: 'الاسم', value: name },
        { name: 'العمر', value: age },
        { name: 'الايدي', value: discordId },
        { name: 'الخبرات', value: experience }
      )
      .setFooter({ text: interaction.user.id });

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('accept')
          .setLabel('قبول')
          .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
          .setCustomId('reject')
          .setLabel('رفض')
          .setStyle(ButtonStyle.Danger),
        new ButtonBuilder()
          .setCustomId('ban')
          .setLabel('حظر')
          .setStyle(ButtonStyle.Secondary)
      );

    const responseChannel = client.channels.cache.get(config.channels.responseChannel);
    await responseChannel.send({ embeds: [applicationEmbed], components: [row] });
    
    await interaction.reply({ content: 'تم إرسال طلبك بنجاح!', ephemeral: true });
  }
});





client.login(config.token);